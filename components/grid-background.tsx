"use client"

import { motion } from "framer-motion"

export function GridBackground() {
  return (
    <div className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-12 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="h-full border-r border-foreground/10" />
        ))}
      </div>
      <div className="absolute inset-0 grid grid-rows-12 gap-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-full border-b border-foreground/10" />
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-[100px]"
      />
    </div>
  )
}
