import { NextResponse } from 'next/server'

interface NewsArticle {
  title: string
  date: string
  image: string
  category: string
  excerpt: string
  url: string
}

export async function GET() {
  try {
    // Using MediaStack API (free tier: 100 requests/month) or RSS2JSON
    // First try with RSS2JSON (more reliable, 10k requests/day free)
    const feeds = [
      'https://www.studyinternational.com/feed/',
      'https://thepienews.com/feed/',
    ]
    
    const allArticles: NewsArticle[] = []
    
    for (const feedUrl of feeds) {
      try {
        const rssUrl = encodeURIComponent(feedUrl)
        const response = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=${rssUrl}&count=3`,
          { 
            cache: 'no-store',
            headers: {
              'Accept': 'application/json',
            }
          }
        )

        if (response.ok) {
          const data = await response.json()
          
          if (data.status === 'ok' && data.items) {
            const articles = data.items.map((item: {
              title?: string
              pubDate?: string
              thumbnail?: string
              enclosure?: { link?: string }
              description?: string
              link?: string
              categories?: string[]
            }) => {
              // Extract image from thumbnail or enclosure
              let imageUrl = item.thumbnail || item.enclosure?.link || ''
              
              // If no image, try to extract from description
              if (!imageUrl && item.description) {
                const imgMatch = item.description.match(/<img[^>]+src="([^">]+)"/)
                if (imgMatch) imageUrl = imgMatch[1]
              }
              
              // Clean description
              const cleanDesc = item.description
                ?.replace(/<[^>]*>/g, '')
                ?.replace(/&nbsp;/g, ' ')
                ?.replace(/&amp;/g, '&')
                ?.replace(/&quot;/g, '"')
                ?.trim()
                ?.slice(0, 120)

              return {
                title: item.title || 'Education News',
                date: item.pubDate 
                  ? new Date(item.pubDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })
                  : new Date().toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    }),
                image: imageUrl || '',
                category: item.categories?.[0] || 'News',
                excerpt: cleanDesc ? cleanDesc + '...' : 'Read more about this education news.',
                url: item.link || '/news-events'
              }
            })
            
            allArticles.push(...articles)
          }
        }
      } catch (feedError) {
        console.error('Error fetching feed:', feedError)
      }
    }

    if (allArticles.length > 0) {
      // Return first 6 articles, sorted by date
      return NextResponse.json({ 
        success: true, 
        articles: allArticles.slice(0, 6) 
      })
    }

    return NextResponse.json({ success: false, articles: [] })
  } catch (error) {
    console.error('Error fetching news:', error)
    return NextResponse.json({ success: false, articles: [] })
  }
}
