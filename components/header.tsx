"use client"

import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { motion } from "framer-motion"

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Tambahkan scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Tambahkan handler untuk scroll to top
  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-md border-b" : "bg-transparent",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link 
          href="/" 
          className="font-bold text-2xl tracking-tighter relative group"
          onClick={handleLogoClick}
        >
          <span className="relative z-10">RizalFarhan</span>
          <span className="absolute -bottom-0 left-0 w-full h-[6px] bg-primary/20 transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-300 ease-out"></span>
          <motion.span
            className="absolute -inset-1 bg-primary/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            layoutId="nav-highlight"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item, index) => (
            <Link 
              key={item.name} 
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-sm font-medium relative group"
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute -bottom-0 left-0 w-full h-[2px] bg-primary transform origin-left group-hover:scale-x-100 scale-x-0 transition-transform duration-300 ease-out"></span>
            </Link>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="default" className="rounded-full px-6">
            <Link href="#contact">Let's Talk</Link>
          </Button>
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="relative">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="border-l-primary/20">
            <nav className="flex flex-col gap-6 mt-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-lg font-medium p-2 hover:bg-primary/5 rounded-md transition-colors relative group flex items-center"
                >
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  {item.name}
                </Link>
              ))}
              <Button asChild className="mt-4 rounded-full w-full">
                <Link href="#contact">Let's Talk</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  )
}
