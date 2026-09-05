"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const photos = [
  {
    src: "/images/photography/1.jpeg",
    className: "left-[500px] top-[0px]",
    width: "w-[200px]",
    height: "h-[250px]",
    objectPosition: "center 70%",
  },
  {
    src: "/images/photography/2.jpeg",
    className: "left-[280px] top-[60px]",
    width: "w-[200px]",
    height: "h-[250px]",
    objectPosition: "center 70%",
  },
  {
    src: "/images/photography/3.jpeg",
    className: "left-[940px] top-[0px]",
    width: "w-[200px]",
    height: "h-[250px]",
    objectPosition: "center center",
  },
  {
    src: "/images/photography/4.jpeg",
    className: "left-[720px] top-[60px]",
    width: "w-[200px]",
    height: "h-[250px]",
    objectPosition: "center center",
  },
  {
    src: "/images/photography/5.jpeg",
    className: "left-[60px] top-[270px]",
    width: "w-[200px]",
    height: "h-[250px]",
    objectPosition: "center center",
  },
  {
    src: "/images/photography/6.jpeg",
    className: "left-[500px] top-[270px]",
    width: "w-[200px]",
    height: "h-[250px]",
    objectPosition: "center center",
  },
  {
    src: "/images/photography/7.jpeg",
    className: "left-[720px] top-[330px]",
    width: "w-[200px]",
    height: "h-[250px]",
    objectPosition: "center 80%",
  },
  {
    src: "/images/photography/8.jpeg",
    className: "left-[280px] top-[330px]",
    width: "w-[200px]",
    height: "h-[250px]",
    objectPosition: "center 80%",
  },
  {
    src: "/images/photography/9.jpg",
    className: "left-[60px] top-[0px]",
    width: "w-[200px]",
    height: "h-[250px]",
    objectPosition: "center 60%",
  },
  {
    src: "/images/photography/10.jpeg",
    className: "left-[940px] top-[270px]",
    width: "w-[200px]",
    height: "h-[250px]",
    objectPosition: "center 60%",
  },
]

export function PhotographySection() {
  return (
    <section id="photography" className="pt-8 pb-0">
      <div className="container">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4 text-xs font-medium text-primary border border-primary/20">
            Creative Side
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Photography
          </h2>

          <p className="text-muted-foreground max-w-xl">
            A collection of moments I captured through my perspective.
          </p>
        </div>

        {/* ========================= */}
        {/* MOBILE - GRID 2 COLUMNS */}
        {/* ========================= */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.03,
              }}
              className="
                relative
                w-full
                aspect-[4/5]
                overflow-hidden
                border
                border-border/50
                bg-background
                shadow-md
                cursor-pointer
                transition-shadow
                hover:shadow-xl
              "
            >
              <Image
                src={photo.src}
                alt={`Photography ${index + 1}`}
                fill
                sizes="50vw"
                className="object-cover"
                style={{
                  objectPosition: photo.objectPosition,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* ========================= */}
        {/* DESKTOP - PHOTO COLLAGE */}
        {/* ========================= */}
        <div className="relative hidden h-[650px] w-full md:block">

          {photos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                scale: 1.05,
                zIndex: 50,
              }}
              className={`
                absolute
                ${photo.width}
                ${photo.height}
                rounded-none
                overflow-hidden
                border
                border-border/50
                bg-background
                shadow-md
                cursor-pointer
                transition-shadow
                hover:shadow-xl
                ${photo.className}
              `}
            >
              <Image
                src={photo.src}
                alt={`Photography ${index + 1}`}
                fill
                sizes="200px"
                className="object-cover"
                style={{
                  objectPosition: photo.objectPosition,
                }}
              />
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}