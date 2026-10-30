"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const photos = [
  {
    src: "/images/photography/j1.png",
    className: "left-[500px] top-[0px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center 70%",
  },
  {
    src: "/images/photography/j2.png",
    className: "left-[280px] top-[60px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center 70%",
  },
  {
    src: "/images/photography/j3.png",
    className: "left-[940px] top-[0px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center center",
  },
  {
    src: "/images/photography/j4.png",
    className: "left-[720px] top-[60px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center center",
  },
  {
    src: "/images/photography/j5.png",
    className: "left-[60px] top-[290px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center center",
  },
  {
    src: "/images/photography/Ultah IKD Vol.3.png",
    className: "left-[60px] top-[580px]",
    width: "w-[200px]",
    height: "h-[356px]",
    objectPosition: "center center",
  },
  {
    src: "/images/photography/SMT3.png",
    className: "left-[60px] top-[959px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center center",
  },
  {
    src: "/images/photography/j7.png",
    className: "left-[500px] top-[290px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center center",
  },
  {
    src: "/images/photography/j8.png",
    className: "left-[720px] top-[350px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center 80%",
  },
  {
    src: "/images/photography/POSTER 2.png",
    className: "left-[720px] top-[640px]",
    width: "w-[200px]",
    height: "h-[283px]",
    objectPosition: "center 80%",
  },
  {
    src: "/images/photography/SMT1.png",
    className: "left-[720px] top-[946px]",
    width: "w-[200px]",
    height: "h-[333px]",
    objectPosition: "center 80%",
  },
  {
    src: "/images/photography/j8.png",
    className: "left-[280px] top-[350px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center 70%",
  },
  {
    src: "/images/photography/POSTER 3.jpg",
    className: "left-[280px] top-[640px]",
    width: "w-[200px]",
    height: "h-[283px]",
    objectPosition: "center 70%",
  },
  {
    src: "/images/photography/sp.png",
    className: "left-[280px] top-[946px]",
    width: "w-[200px]",
    height: "h-[282px]",
    objectPosition: "center 70%",
  },
  {
    src: "/images/photography/j6.png",
    className: "left-[60px] top-[0px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center 60%",
  },
  {
    src: "/images/photography/sp.png",
    className: "left-[940px] top-[290px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center 60%",
  },
  {
    src: "/images/photography/Ultah IKD Vol.2.png",
    className: "left-[940px] top-[580px]",
    width: "w-[200px]",
    height: "h-[356px]",
    objectPosition: "center 60%",
  },
  {
    src: "/images/photography/SMT2.png",
    className: "left-[940px] top-[959px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center center",
  },
  {
    src: "/images/photography/Rizal.png",
    className: "left-[500px] top-[580px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center center",
  },
  {
    src: "/images/photography/Rizal2.png",
    className: "left-[500px] top-[870px]",
    width: "w-[200px]",
    height: "h-[267px]",
    objectPosition: "center center",
  },
]

export function PhotographySection() {
  return (
    <section id="design" className="pt-8 pb-0">
      <div className="container">

        {/* Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4 text-xs font-medium text-primary border border-primary/20">
            Creative Side
          </div>

          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
            Design
          </h2>

          <p className="text-muted-foreground max-w-xl">
            A collection of visual ideas and designs crafted with creativity and purpose.
          </p>
        </div>

        {/* MOBILE - GRID 2 COLUMNS */}
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
                scale: 1.08,
                zIndex: 50,
                transition: {
                  duration: 0.3,
                },
              }}
              className="
                relative
                w-full
                aspect-[3/4]
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

        {/* DESKTOP - PHOTO COLLAGE */}
        <div className="relative hidden h-[1260px] w-full md:block">
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
                scale: 1.2,
                zIndex: 50,
                transition: {
                  duration: 0.3,
                },
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