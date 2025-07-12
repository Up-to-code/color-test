import type React from "react"
import type { Metadata } from "next"
import { Cairo } from "next/font/google"
import "./globals.css"

const cairo = Cairo({
  subsets: ["latin", "arabic"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "اختبار الشخصية بالألوان - Color Personality Quiz",
  description: "اكتشف شخصيتك من خلال الألوان - Discover your personality through colors",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
