"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ArrowRight, Megaphone, Bot, Sparkles, BookOpen } from "lucide-react"
import servicesData from "@/data/services.json"

interface Service {
  id: string
  title: string
  icon: string
  bulletPoints: string[]
  modalContent: {
    title: string
    description: string
    features: string[]
  }
}

const iconMap = {
  Megaphone,
  Bot,
  Sparkles,
  BookOpen,
}

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  // Disable background scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [selectedService])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  }

  return (
    <section id="services" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black pt-0 -mt-1">
      <div className="container mx-auto px-4 py-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to elevate your business and transform your digital presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {servicesData.services.map((service, index) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap]

            return (
              <motion.div
                key={service.id}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-2xl border border-gray-700 hover:border-yellow-400/50 transition-all duration-300 h-full flex flex-col shadow-2xl relative">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full flex items-center justify-center shadow-lg border-4 border-gray-900">
                      <IconComponent className="w-6 h-6 text-black" />
                    </div>
                  </div>

                  {/* Card Header */}
                  <div className="mb-6 mt-4">
                    <h3 className="text-xl md:text-2xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent text-center">
                      {service.title}
                    </h3>
                  </div>

                  {/* Bullet Points */}
                  <div className="flex-grow mb-6">
                    <ul className="space-y-3">
                      {service.bulletPoints.map((point, pointIndex) => (
                        <motion.li
                          key={pointIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 + pointIndex * 0.1 }}
                          className="flex items-start text-gray-300"
                        >
                          <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-sm md:text-base leading-relaxed">{point}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Learn More Button */}
                  <button
                    onClick={() => setSelectedService(service)}
                    className="group/btn relative w-full py-3 px-6 bg-transparent border-2 border-yellow-400/30 rounded-lg text-yellow-400 font-semibold transition-all duration-300 hover:bg-yellow-400/10 overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>

                    {/* Animated border effect */}
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 rounded-lg animate-pulse"></div>
                      <div className="absolute inset-[2px] bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-md"></div>
                    </div>
                  </button>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-gradient-to-br from-gray-900 via-gray-800 to-black p-8 rounded-2xl border border-yellow-400/30 max-w-2xl w-full max-h-[80vh] overflow-y-auto no-scrollbar"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                  {selectedService.modalContent.title}
                </h3>
                <button
                  onClick={() => setSelectedService(null)}
                  className="text-gray-400 hover:text-yellow-400 transition-colors p-2"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">{selectedService.modalContent.description}</p>

                <div>
                  <h4 className="text-xl font-semibold text-yellow-400 mb-4">Key Features:</h4>
                  <ul className="space-y-3">
                    {selectedService.modalContent.features.map((feature, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start text-gray-300"
                      >
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="leading-relaxed">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <button
                  onClick={() => setSelectedService(null)}
                  className="w-full py-3 px-6 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 transform hover:scale-105"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
