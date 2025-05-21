"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" className="pt-12 md:pt-16">
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-md">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-2xl transform rotate-3"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform -rotate-3"></div>
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <Image
                  src="/images/rizal_foto3.jpg"
                  alt="About Rizal Farhan Nanda"
                  fill
                  className="object-cover object-[center_10%]" // Mengubah posisi foto ke bawah 70%
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Design elements */}
              <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full border-2 border-primary/30"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-6 rounded-full bg-primary/10"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4 text-xs font-medium text-primary border border-primary/20">
              Tentang Saya
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Rizal Farhan Nanda
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm Rizal Farhan Nanda, a UI/UX Designer currently studying at Politeknik Negeri Semarang. I'm
                passionate about creating intuitive and engaging digital experiences that solve real user problems.
              </p>
              <p>
                My design approach combines aesthetic sensibility with user-centered thinking. I believe that great
                design should not only look beautiful but also function seamlessly and provide value to users.
              </p>
              <p>
                When I'm not designing, you can find me exploring new design trends, learning new tools, or
                collaborating with fellow designers and developers to bring ideas to life.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="text-3xl font-bold text-primary mb-1">5+</h3>
                <p className="text-xs text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="text-3xl font-bold text-primary mb-1">50+</h3>
                <p className="text-xs text-muted-foreground">Projects Completed</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                <h3 className="text-3xl font-bold text-primary mb-1">30+</h3>
                <p className="text-xs text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
