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
      title: "My Coffe",
      category: "UI/UX Design",
      image: "/images/mycof.png?height=600&width=800",
      imagePosition: "50% 50%",
      description: "A web platform for MyCof, offering information on our coffee, menu, and updates. Designed to share the cozy experience we’ve brought to Semarang since 2025.",
      tags: ["Web", "Food & Beverage", "UI/UX"],
      link: "https://www.figma.com/proto/BxQKS1CK9fq9ch4fJD7kqi/MULMED?node-id=1-103&p=f&t=klYwvOtMNaK5qbGZ-1&scaling=scale-down-width&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A103",
    },
    {
      title: "Mitra Karya Group",
      category: "UI/UX Design",
      image: "/images/karya.png?height=600&width=800",
      imagePosition: "50% 50%",
      description: "A web-based recruitment platform to simplify the hiring process. Applicants can apply online, while HR can screen and manage candidate data in a structured manner.",
      tags: ["Web", "Recruitment", "UI/UX"],
      link: "https://www.figma.com/design/r15lPnkpeG6FnAxVHd5Qnz/Aplikasi-system-HRD-Management-untuk-Proses-recruitment--magang--dan-training--dan-penilaian-kinerja?node-id=103-330&t=CNxWH5zwTD6rYwZc-1",
    },
    {
      title: "Nusantara Playhouse",
      category: "Game Developer",
      image: "/images/game.png?height=600&width=800",
      imagePosition: "50% 55%",
      description: "A Unity-based educational game with Indonesian cultural themes. Designing Rasa Indonesia, a mini-game that focuses on identifying traditional foods from various regions.",
      tags: ["Game", "Education", "UI/UX"],
      link: "https://www.notion.so/Nusantara-Playhouse-1fe0c81d21db807db0ebd819001b8e98?pvs=4",
    },
    {
      title: "System Attendance Polines",
      category: "UI/UX Design",
      image: "/images/poli.png?height=600&width=800",
      imagePosition: "50% 60%", 
      description: "A mobile application to improve the accuracy and efficiency of lecturer and staff attendance at Politeknik Negeri Semarang by using digital verification and real-time tracking.",
      tags: ["Mobile", "Attendance", "UI/UX"],
      link: "https://www.figma.com/proto/hg6j17S3ItthjMTsIrciYH/SELIN-APP?node-id=6-158&p=f&t=VIloFY2D08XS7AXT-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      secondaryLink: "https://www.figma.com/design/hg6j17S3ItthjMTsIrciYH/SELIN-APP?node-id=0-1&t=Om4gTP0R9sioPUEB-1",
      secondaryLabel: "Figma"
    },
    {
      title: "StudyMate",
      category: "To-Do List",
      image: "/images/studymate.png?height=600&width=800",
      imagePosition: "50% 60%", 
      description: "A web-based to-do list application that I designed and developed to help users manage their daily tasks easily and efficiently.",
      tags: ["Web", "Task Management", "UI/UX"],
      link: "https://todolist.rizalfarhan.my.id/",
      secondaryLink: "https://github.com/rizalfarhan/todolist",
      secondaryLabel: "GitHub"
    },
    {
      title: "Automatic Waste Sorting System",
      category: "Internet of Things",
      image: "/images/waste.png?height=600&width=800",
      imagePosition: "50% 60%",
      description: "An Arduino-based IoT system that automatically detects and sorts wet and dry waste using humidity and ultrasonic sensors for better waste management.",
      tags: ["IoT", "Waste Management", "Embedded System"],
      link: "https://www.notion.so/Automatic-Waste-Sorting-System-1fe0c81d21db800088f3c0783f7b90bc?pvs=4",
    },
    {
      title: "Cinemate",
      category: "UI/UX Design",
      image: "/images/mate.png?height=600&width=800",
      imagePosition: "50% 50%",
      description: "A movie streaming app aimed at students and young adults. Prioritizing affordability, minimal advertising, and features such as shared viewing and account access.",
      tags: ["Mobile", "Streaming", "UI/UX"],
      link: "https://www.figma.com/proto/Gg1Thvi5wUrQwGfwbSiNOZ/Cinemate",
      secondaryLink: "https://www.figma.com/design/Gg1Thvi5wUrQwGfwbSiNOZ/Cinemate?node-id=87-249&t=n0gTOcVPtBE3BHgi-1",
      secondaryLabel: "Figma"
    },
    {
      title: "Rebranding Tengoku",
      category: "UI/UX Design",
      image: "/images/tengo.png?height=600&width=800",
      imagePosition: "0% 50%",
      description: "Rebranding project for Tengoku Custom MSME. Redesigned logo, product catalog, and marketing banners to attract a younger audience and strengthen visual identity.",
      tags: ["Visual Design", "Branding", "UI/UX"],
      link: "https://www.notion.so/Rebranding-Tengoku-Custom-1fd0c81d21db80d98ad3ec55db53925b?pvs=4",
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
              My Projects
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
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6 gap-2">
                    {project.link && (
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
                    )}
                    {project.secondaryLink && (
                      <a 
                        href={project.secondaryLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block"
                      >
                        <Button variant="secondary" size="sm" className="gap-2">
                          {project.secondaryLabel || "Lihat Detail"}
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </a>
                    )}
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

interface Project {
  title: string;
  category: string;
  image?: string;
  imagePosition?: string;
  description: string;
  tags: string[];
  link?: string;
  githubLink?: string;
  secondaryLink?: string;
  secondaryLabel?: string; // Label untuk tombol kedua
}
