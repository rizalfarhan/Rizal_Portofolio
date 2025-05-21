"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function FloatingElements() {
  const [dimensions, setDimensions] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    // Only access window in useEffect (client-side)
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Design elements */}
      {/*
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="absolute top-[15%] left-[5%] w-16 h-16 border border-primary/20 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute top-[30%] right-[10%] w-24 h-24 border border-primary/20 rounded-md rotate-45"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-[20%] left-[15%] w-20 h-20 bg-primary/5 rounded-full"
      />
      <motion.div
        initial={{ opacity: 0, rotate: -45 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-[30%] right-[5%] w-32 h-8 border border-primary/20 rounded-md"
      />
      */}

      {/* Floating dots */}
      {/*
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => {
          const randomX = Math.random() * 100
          const randomY = Math.random() * 100

          return (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                x: `${randomX}%`,
                y: `${randomY}%`,
              }}
              animate={{
                opacity: 0.3 + Math.random() * 0.5,
                x: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
                y: [`${Math.random() * 100}%`, `${Math.random() * 100}%`, `${Math.random() * 100}%`],
              }}
              transition={{
                duration: 10 + Math.random() * 20,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className="absolute w-1 h-1 bg-primary/30 rounded-full"
            />
          )
        })}
      </div>
      */}
    </div>
  )
}
