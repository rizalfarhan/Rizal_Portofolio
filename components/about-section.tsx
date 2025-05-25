"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { GraduationCap, Lightbulb, UsersRound } from "lucide-react"

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about">
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
                  src="/images/rizal_foto5.jpg"
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
              About Me
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Rizal Farhan Nanda
            </h2>
            <div className="space-y-3 text-muted-foreground">
              <p>
                I am Rizal Farhan Nanda, an Informatics Engineering student at Politeknik Negeri Semarang who has a strong interest in application development and UI/UX design. Through academic projects and self-directed learning, I have gained solid experience in creating responsive and user-centered digital solutions, including mobile apps, interactive websites, and management systems such as attendance tracking.
              </p>
              <p>
                In addition to technical skills, I actively collaborate in teams to improve communication and problem-solving abilities. I believe that creativity, logic, and teamwork are essential to building meaningful digital products. I am currently looking for an internship opportunity as a UI/UX Designer to apply my skills in creating visually appealing and easy-to-use interfaces.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-5">
              <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex justify-center items-center h-12 mb-2">
                  <GraduationCap className="w-10 h-10 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Informatics Engineering Student
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex justify-center items-center h-12 mb-2">
                  <Lightbulb className="w-10 h-10 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">
                  Enthusiastic about ui/ux design
                </p>
              </div>
              <div className="text-center p-4 rounded-xl bg-primary/5 border border-primary/10">
                <div className="flex justify-center items-center h-12 mb-2">
                  <UsersRound className="w-10 h-10 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground">
                  A passionate Team Collaborator
                </p>
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
