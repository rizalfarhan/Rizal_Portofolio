"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  const projects = [
    {
      title: "SELIN Mobile App",
      category: "UI/UX Design",
      image: "/Team Selin.jpg?height=600&width=800",
      description: "Selin (System Attendance Polines) adalah aplikasi mobile inovatif yang dirancang untuk meningkatkan fleksibilitas, efisiensi, dan akurasi sistem absensi dosen dan karyawan di Politeknik Negeri Semarang melalui verifikasi digital dan pemantauan real-time.",
      tags: ["UI/UX", "Presensi", "Mobile"],
    },
    {
      title: "Nusantara Playhouse",
      category: "Game Developer",
      image: "/Team Nusantara Playhouse.jpg?height=600&width=800",
      description: "Mengembangkan game edukatif berbasis Unity berjudul Nusantara Playhouse, yang terdiri dari tiga mini-game bertema budaya Indonesia. Bertanggung jawab penuh atas Game 3: Rasa Indonesia, permainan tebak makanan tradisional dari berbagai daerah.",
      tags: ["Game", "Unity", "UI/UX"],
    },
    {
      title: "Automatic Waste Sorting System",
      category: "IoT",
      image: "/Team Waste.jpg?height=600&width=800",
      description: "Merancang sistem pemilah sampah otomatis berbasis Arduino yang mampu membedakan sampah basah dan kering menggunakan sensor kelembaban dan ultrasonik.",
      tags: ["IoT", "Embedded System", "Arduino"],
    },
    {
      title: "Health & Fitness App",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "A health tracking app with a clean and motivating interface.",
      tags: ["Mobile", "Health", "UI/UX"],
    },
    {
      title: "Educational Platform",
      category: "Web Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "An educational platform designed for optimal learning experience.",
      tags: ["Web", "Education", "UI/UX"],
    },
    {
      title: "Smart Home Control App",
      category: "UI Design",
      image: "/placeholder.svg?height=600&width=800",
      description: "An intuitive app for controlling smart home devices.",
      tags: ["Mobile", "IoT", "UI"],
    },
  ]

  return (
    <section id="portfolio" className="py-20 md:py-32 relative">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4 text-xs font-medium text-primary border border-primary/20">
              Portofolio Saya
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              Kumpulan proyek yang telah saya kerjakan sebagai hasil dari pembelajaran, kerja tim, dan eksplorasi mandiri di bidang teknologi dan desain.             </p>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow border-primary/10 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <Button variant="default" size="sm" className="gap-2">
                      View Project
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-primary px-2 py-1 rounded-full bg-primary/10">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs px-2 py-1 rounded-full border border-border bg-muted/50">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg" className="rounded-full group">
            <span>View All Projects</span>
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
