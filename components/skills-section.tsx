"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Figma, 
  Palette, 
  Layers, 
  Users, 
  Code2, 
  Wind,
  FileCode
} from "lucide-react"

export function SkillsSection() {
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

  const skills = [
    {
      name: "Figma",
      description: "UI/UX design, prototyping, design systems, collaboration",
      icon: <Figma className="h-10 w-10 text-primary" />,
    },
    {
      name: "Canva",
      description: "Graphic design, social media assets, presentations, marketing materials",
      icon: <Palette className="h-10 w-10 text-primary" />,
    },
    {
      name: "UI Design",
      description: "Visual design, interface design, responsive layouts, typography",
      icon: <Layers className="h-10 w-10 text-primary" />,
    },
    {
      name: "UX Design",
      description: "User research, wireframing, usability testing, information architecture",
      icon: <Users className="h-10 w-10 text-primary" />,
    },
    {
      name: "HTML & CSS",
      description: "Semantic markup, responsive layout, flexbox & grid, styling consistency",
      icon: <Code2 className="h-10 w-10 text-primary" />,
    },
    {
      name: "Tailwind CSS",
      description: "Rapid prototyping, utility-first styling, custom design implementation from Figma",
      icon: <Wind className="h-10 w-10 text-primary" />,
    },
    {
      name: "JavaScript",
      description: "DOM manipulation, event handling, interactive UI components",
      icon: <FileCode className="h-10 w-10 text-primary" />,
    },
  ]

  return (
    <section id="skills">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/4"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4 text-xs font-medium text-primary border border-primary/20">
              My Skills
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Design Tools & Expertise</h2>
            <p className="text-muted-foreground">
              I combine design tools and principles to create digital experiences that are pleasing to the eye, easy to use, and meet user needs while supporting business goals.            </p>
          </motion.div>
          
          <motion.div
            ref={ref}
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 md:w-3/4"
          >
            {skills.map((skill, index) => (
              <motion.div key={index} variants={item}>
                <Card className="h-full hover:shadow-md transition-shadow border-primary/10 overflow-hidden group">
                  <CardContent className="p-6">
                    <div className="flex flex-col">
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 rounded-xl bg-primary/10">{skill.icon}</div>
                      </div>
                      <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
                        {skill.name}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">{skill.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
    </section>
  )
}
