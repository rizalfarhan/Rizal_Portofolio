"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

interface CertificationProps {
  title: string
  issuer: string
  date: string
  pdfUrl: string
}

const Certification = ({ title, issuer, date, pdfUrl }: CertificationProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden h-full hover:shadow-md transition-shadow border-primary/10 group p-6">
        <div className="mb-2">
          <span className="text-xs font-medium text-primary px-2 py-1 rounded-full bg-primary/10">
            {issuer}
          </span>
        </div>
        <h3 className="text-xl font-medium mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Tanggal Sertifikasi: {date}
        </p>
        <div className="flex justify-end mt-auto">
          <Button asChild size="sm" className="gap-2">
            <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
              Lihat Sertifikat
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}

export default function Certifications() {
  const certifications = [
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      issuer: "Cisco",
      date: "2025",
      pdfUrl: "/certificates/CCNA.pdf"
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Udemy",
      date: "2023",
      pdfUrl: "/certificates/CCNA.pdf"
    },
    // Tambahkan lainnya jika perlu
  ]

  return (
    <section className="py-20 md:py-32 relative">
      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4 text-xs font-medium text-primary border border-primary/20">
              Sertifikasi
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">Certifications</h2>
            <p className="text-muted-foreground max-w-xl">
              Sertifikasi profesional yang saya raih sebagai bukti keahlian dan komitmen terhadap pembelajaran berkelanjutan.
            </p>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {certifications.map((cert, index) => (
            <Certification key={index} {...cert} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
