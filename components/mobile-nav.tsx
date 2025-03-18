"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">打开菜单</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80%] sm:w-[350px]">
        <div className="flex flex-col space-y-4 mt-8">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
          >
            首页
          </Link>
          <Link
            href="/eortc"
            onClick={() => setOpen(false)}
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
          >
            EORTC风险评估
          </Link>
          <Link
            href="/immunohistochemistry"
            onClick={() => setOpen(false)}
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
          >
            免疫组化指标
          </Link>
          <Link
            href="/classification"
            onClick={() => setOpen(false)}
            className="text-lg font-medium py-2 hover:text-primary transition-colors"
          >
            分级分类
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  )
}

