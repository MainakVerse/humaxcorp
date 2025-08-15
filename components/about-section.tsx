"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Users, Target, Sparkles } from "lucide-react"
import aboutData from "../data/about.json"

const iconMap = {
  CheckCircle,
  Users,
  Target,
}

export default function AboutSection() {
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 8 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 2,
      }))
      setSparkles(newSparkles)
    }

    generateSparkles()
    const interval = setInterval(generateSparkles, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="about" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
          {/* Left Half - Content */}
          <div className="col-span-12 lg:col-span-6 order-2 lg:order-1">
            <div className="space-y-12">
              {/* Introductory Text */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent">
                  About HUMAX CORP
                </h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We are a forward-thinking digital transformation company dedicated to elevating businesses through
                  innovative solutions. Our comprehensive approach combines cutting-edge technology with strategic
                  insights to deliver exceptional results.
                </p>
              </div>

                             {/* Feature Boxes */}
               <div className="space-y-6">
                {aboutData.features.slice(0, 3).map((feature, index) => {
                  const IconComponent = iconMap[feature.icon as keyof typeof iconMap]
                  return (
                    <div
                      key={index}
                                             className="group bg-gradient-to-r from-gray-900/50 to-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-400/10 transform hover:-translate-y-1"
                      style={{
                        animationDelay: `${index * 0.1}s`,
                      }}
                    >
                      <div className="flex items-start space-x-6">
                        <div className="flex-shrink-0">
                          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <IconComponent className="w-8 h-8 text-black" />
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <h3 className="text-xl font-semibold bg-gradient-to-r from-yellow-400 to-white bg-clip-text text-transparent mb-3">
                            {feature.title}
                          </h3>
                          <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Half - Image with Animations */}
          <div className="col-span-12 lg:col-span-6 order-1 lg:order-2">
            <div className="relative h-96 lg:h-full min-h-[500px] flex items-center justify-center">
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 rounded-3xl blur-3xl animate-pulse"></div>

                {/* Main Image */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden border-4 border-gradient-to-r from-yellow-400 to-yellow-600 shadow-2xl shadow-yellow-400/20">
                  <img
                    src="/about.png?height=400&width=400"
                    alt="HUMAX CORP Office"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                </div>

                {/* Award Winning badge to bottom left */}
                <div
                  className="absolute -bottom-4 -left-4 bg-gradient-to-r from-yellow-600 to-yellow-400 text-black px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-bounce"
                  style={{ animationDelay: "0.5s" }}
                >
                  Certified Personnels
                </div>

                {/* Sparkling Animations */}
                {sparkles.map((sparkle) => (
                  <div
                    key={sparkle.id}
                    className="absolute pointer-events-none"
                    style={{
                      left: `${sparkle.x}%`,
                      top: `${sparkle.y}%`,
                      animationDelay: `${sparkle.delay}s`,
                    }}
                  >
                    <Sparkles
                      className="w-4 h-4 text-yellow-400 animate-ping"
                      style={{
                        animationDuration: "2s",
                        animationIterationCount: "infinite",
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
