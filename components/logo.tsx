import Image from "next/image"
import { cn } from "@/lib/utils"

interface LogoProps {
  className?: string
  inverted?: boolean
}

export function Logo({ className, inverted = false }: LogoProps) {
  return (
    <Image
      src="/logo.jpeg"
      alt="HighLinks Consultants"
      width={60}
      height={60}
      className={cn(
        "h-14 w-14 rounded-full object-cover",
        inverted && "brightness-0 invert",
        className
      )}
      priority
    />
  )
}
