"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const scrollTexts = ["Your Business", "Digital Reputation", "Online Valuation"]

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % scrollTexts.length)
    }, 3000) // Change text every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background decorative elements with 3D effect */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-10 md:top-20 md:right-20 w-72 h-72 md:w-96 md:h-96 rounded-full border border-yellow-500/20 shadow-2xl shadow-yellow-500/10"></div>
        <div className="absolute top-16 right-16 md:top-32 md:right-32 w-56 h-56 md:w-72 md:h-72 rounded-full border border-yellow-500/10 shadow-xl shadow-yellow-500/5"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20 relative z-10">
        <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8 items-center min-h-[80vh]">
          {/* Image Section - Order 1 on mobile, Order 2 on desktop */}
          <div className="col-span-12 col-start-1 lg:col-span-4 lg:col-start-8 relative flex justify-center items-center order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              {/* Main image - significantly larger */}
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] xl:w-[32rem] xl:h-[32rem] rounded-full overflow-hidden border-4 border-yellow-500/30 shadow-2xl shadow-yellow-500/20 transform hover:scale-105 transition-transform duration-500">
                <Image src="/header-image.png" alt="HUMAX Corp business representation" width={512} height={512} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          {/* Content Section - Order 2 on mobile, Order 1 on desktop */}
          <div className="col-span-12 col-start-1 lg:col-span-6 lg:col-start-2 space-y-6 md:space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Welcome Badge */}
            <div className="inline-flex items-center px-3 py-2 md:px-4 md:py-2 rounded-full border border-yellow-500/30 bg-yellow-500/5 shadow-lg shadow-yellow-500/20">
              <span className="text-yellow-400 text-sm font-medium">Welcome to HUMAX CORP</span>
            </div>

            {/* Main Heading with Animation */}
            <div className="space-y-6 md:space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-yellow-400 leading-tight drop-shadow-2xl">
                Elevate{" "}
                <span className="block relative h-20 sm:h-24 lg:h-28 overflow-hidden">
                  {scrollTexts.map((text, index) => (
                    <span
                      key={text}
                      className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out ${
                        index === currentTextIndex
                          ? "transform translate-y-0 opacity-100"
                          : index < currentTextIndex
                            ? "transform -translate-y-full opacity-0"
                            : "transform translate-y-full opacity-0"
                      }`}
                    >
                      {text}
                    </span>
                  ))}
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Transform your vision into reality with our comprehensive suite of business solutions. We're here to help
              you achieve extraordinary results.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="#services">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-yellow-500 text-yellow-400 hover:bg-yellow-500 hover:text-black transition-all duration-300 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg bg-transparent shadow-lg shadow-yellow-500/20 hover:shadow-yellow-500/40"
                >
                  Explore Services →
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="lg"
                className="relative text-yellow-400 hover:bg-transparent transition-all duration-300 px-6 md:px-8 py-4 md:py-6 text-base md:text-lg overflow-hidden group border border-transparent hover:border-yellow-500/30"
              >
                <span className="relative z-10">Schedule Meeting →</span>
                {/* Animated border effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-yellow-500 rounded-md">
                  <div className="absolute inset-0 rounded-md overflow-hidden">
                    <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-[shimmer_2s_infinite] transform -skew-x-12"></div>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2">
          <Link href="#services" className="block cursor-pointer hover:scale-110 transition-transform duration-300">
            <ChevronDown className="w-5 h-5 md:w-6 md:h-6 text-yellow-400 animate-bounce drop-shadow-lg" />
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
      `}</style>
    </section>
  )
}
