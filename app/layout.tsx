import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Link from "next/link"
import { ThemeProvider } from "@/components/theme-provider"
import { MobileNav } from "@/components/mobile-nav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "UC资料库",
  description: "提供尿路上皮癌相关的权威信息资源和EORTC风险评估工具",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <header className="border-b">
            <div className="container mx-auto py-4 px-4 flex justify-between items-center">
              <Link href="/" className="font-bold text-xl">
                UC资料库
              </Link>
              {/* 桌面导航 - 在移动端隐藏 */}
              <nav className="hidden md:block">
                <ul className="flex space-x-6">
                  <li>
                    <Link href="/" className="hover:text-primary">
                      首页
                    </Link>
                  </li>
                  <li>
                    <Link href="/eortc" className="hover:text-primary">
                      EORTC风险评估
                    </Link>
                  </li>
                  <li>
                    <Link href="/immunohistochemistry" className="hover:text-primary">
                      免疫组化指标
                    </Link>
                  </li>
                  <li>
                    <Link href="/classification" className="hover:text-primary">
                      分级分类
                    </Link>
                  </li>
                </ul>
              </nav>
              {/* 移动端导航 - 在桌面端隐藏 */}
              <MobileNav />
            </div>
          </header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'