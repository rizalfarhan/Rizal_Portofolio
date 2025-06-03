"use client"

import Link from "next/link"
import { Linkedin, Mail, Github, Instagram, Twitter, ChevronUp } from "lucide-react" // tambahkan ChevronUp
import { motion } from "framer-motion"
import { useState, useEffect } from "react" // tambahkan useState dan useEffect

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Tampilkan tombol ketika scroll melebihi 500px
      setShowScrollTop(window.scrollY > 3800)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="border-t pt-12 pb-6 md:pt-16 md:pb-8 relative overflow-hidden bg-blue-50">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <Link href="/" className="font-bold text-2xl tracking-tighter inline-block mb-4">
              Rizal<span className="text-primary">.</span>
            </Link>
            <p className="text-muted-foreground max-w-md mb-6">
              UI/UX Designer creating beautiful, functional, and user-centered digital experiences.
            </p>
            <div className="flex items-center gap-4">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.linkedin.com/in/rizalfarhannanda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="mailto:rizalfarhannanda@gmail.com"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/rizalfarhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://www.instagram.com/rzlfrhnn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </motion.a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:gap-12 md:ml-auto">
            <div>
              <h3 className="font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
                <li><Link href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Skills</Link></li>
                <li><Link href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="#certifications" className="text-muted-foreground hover:text-primary transition-colors">Certifications</Link></li>
                <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Services</h3>
              <ul className="space-y-2">
                <li><span className="text-muted-foreground hover:text-primary transition-colors">UI Design</span></li>
                <li><span className="text-muted-foreground hover:text-primary transition-colors">UX Design</span></li>
                <li><span className="text-muted-foreground hover:text-primary transition-colors">Web Design</span></li>
                <li><span className="text-muted-foreground hover:text-primary transition-colors">Mobile Design</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Rizal Farhan Nanda. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2 md:mt-0">
            by Rizal Farhan Nanda
          </p>
        </div>
      </div>

      {/* Scroll to top button */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: showScrollTop ? 1 : 0 }}
        onClick={scrollToTop}
        className={`fixed right-6 bottom-6 w-12 h-12 rounded-full bg-primary text-white shadow-lg flex items-center justify-center hover:bg-primary/90 transition-all duration-300 z-50 ${
          showScrollTop ? 'visible' : 'invisible'
        }`}
        whileHover={{ y: -3 }}
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-6 w-6" />
      </motion.button>

      {/* Design element strip at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
    </footer>
  )
}
