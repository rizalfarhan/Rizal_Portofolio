"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const [showAll, setShowAll] = useState(false)

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
      image: "/images/Team Selin.jpg?height=600&width=800",
      imagePosition: "50% 60%", 
      description: "A mobile application designed to increase the flexibility, efficiency, and accuracy of the lecturer and employee attendance system at Politeknik Negeri Semarang through digital verification and real-time monitoring.",
      tags: ["UI/UX", "Presensi", "Mobile"],
      link: "https://github.com/syahrulcaem/selin-backend",
    },
    {
      title: "Nusantara Playhouse",
      category: "Game Developer",
      image: "/images/Team Nusantara Playhouse.jpg?height=600&width=800",
      imagePosition: "50% 55%",
      description: "Developed a Unity-based educational game called Nusantara Playhouse, which consists of three mini-games themed on Indonesian culture. Fully responsible for Game 3: Rasa Indonesia, a traditional food guessing game from various regions.",
      tags: ["Game", "Unity", "UI/UX"],
    },
    {
      title: "Automatic Waste Sorting System",
      category: "IoT",
      image: "/images/Team Waste.jpg?height=600&width=800",
      imagePosition: "50% 60%",
      description: "Designing an automatic waste sorting system based on Arduino that is able to distinguish wet and dry waste using humidity and ultrasonic sensors.",
      tags: ["IoT", "Embedded System", "Arduino"],
    },
    {
      title: "Mitra Group",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=600&width=800",
      imagePosition: "50% 50%",
      description: "Sistem rekrutmen online yang mempermudah proses seleksi. Pelamar dapat melamar secara daring, sementara HR menyaring dan mengelola data kandidat secara efisien dan terstruktur.",
      tags: ["Web", "Rekrutmen", "UI/UX"],
    },
    {
      title: "CINEMATE",
      category: "UI/UX Design",
      image: "/placeholder.svg?height=600&width=800",
      imagePosition: "50% 50%",
      description: "An educational platform designed for optimal learning experience.",
      tags: ["Mobile", "Film", "UI/UX"],
      link: "https://www.figma.com/proto/Gg1Thvi5wUrQwGfwbSiNOZ/Cinemate?node-id=87-2602&t=au6mHQMkM7VOY6qn-1&scaling=scale-down&content-scaling=fixed&page-id=87%3A249&starting-point-node-id=87%3A250",
    },
    {
      title: "Rebranding Tengoku",
      category: "Design",
      image: "/images/Logo Tengoku.jpg?height=600&width=800",
      imagePosition: "50% 50%",
      description: "An intuitive app for controlling smart home devices.",
      tags: ["Design", "Rebranding", "UI"],
    },
  ]

  // Filter projects yang ditampilkan
  const displayedProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section id="portfolio">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4 text-xs font-medium text-primary border border-primary/20">
              My Portfolio
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Projects</h2>
            <p className="text-muted-foreground max-w-xl">
              A collection of projects that I have worked on as a result of learning, teamwork and independent exploration in the field of technology and design.
            </p>
          </div>
        </div>

        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayedProjects.map((project, index) => (
            <motion.div key={index} variants={item}>
              <Card className="overflow-hidden h-full hover:shadow-md transition-shadow border-primary/10 group">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-105 duration-500"
                    style={{ objectPosition: project.imagePosition || '50% 50%' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                    >
                        <Button variant="default" size="sm" className="gap-2">
                            View Project
                            <ExternalLink className="h-4 w-4" />
                        </Button>
                    </a>
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
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full group"
            onClick={() => setShowAll(!showAll)}
          >
            <span>{showAll ? "Show Less" : "View All Projects"}</span>
            <ArrowRight 
              className={cn(
                "ml-2 h-4 w-4 transition-transform",
                showAll ? "rotate-180" : "group-hover:translate-x-1"
              )} 
            />
          </Button>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
