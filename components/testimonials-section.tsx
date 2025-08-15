"use client"

import { useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import testimonialsData from "../data/testimonials.json"

interface Testimonial {
  id: number
  name: string
  position: string
  company: string
  image: string
  rating: number
  testimonial: string
}

export default function TestimonialsSection() {
  const [testimonials] = useState<Testimonial[]>(testimonialsData.testimonials)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying || testimonials.length === 0) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, testimonials.length])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  if (testimonials.length === 0) return null

  const currentTestimonial = testimonials[currentIndex]

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.1),transparent_50%)]" />
      </div>

      <div className="relative z-10 grid grid-cols-12 gap-4 px-4 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="col-span-12 text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent">
            What Our Clients Say
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Discover how HUMAX CORP has transformed businesses and elevated success stories across industries
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="col-span-12 lg:col-start-2 lg:col-span-10">
          <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full flex items-center justify-center shadow-lg">
                <Quote className="w-6 h-6 text-black" />
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center px-8 md:px-16 lg:px-20">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-200 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{currentTestimonial.testimonial}"
              </blockquote>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <div className="relative">
                  <Image
                    src={currentTestimonial.image || "/placeholder.svg"}
                    alt={currentTestimonial.name}
                    width={80}
                    height={80}
                    className="rounded-full border-2 border-yellow-400/30"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/20 to-transparent" />
                </div>
                <div className="text-center md:text-left">
                  <h4 className="text-xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">
                    {currentTestimonial.name}
                  </h4>
                  <p className="text-gray-400">
                    {currentTestimonial.position} at {currentTestimonial.company}
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 hover:from-yellow-400/40 hover:to-yellow-300/40 border border-yellow-400/30 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-gradient-to-r from-yellow-400/20 to-yellow-300/20 hover:from-yellow-400/40 hover:to-yellow-300/40 border border-yellow-400/30 rounded-full flex items-center justify-center transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-yellow-400 group-hover:text-yellow-300 transition-colors" />
            </button>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="col-span-12 flex justify-center mt-8 gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-gradient-to-r from-yellow-400 to-yellow-300 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Grid - Desktop Only */}
        <div className="hidden lg:block col-span-12 mt-12">
          <div className="grid grid-cols-6 gap-4 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => goToTestimonial(index)}
                className={`relative group transition-all duration-300 ${
                  index === currentIndex ? "scale-110" : "opacity-60 hover:opacity-80"
                }`}
              >
                <div className="relative">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className="rounded-full border-2 border-yellow-400/30 group-hover:border-yellow-400/60 transition-all duration-300"
                  />
                  {index === currentIndex && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/30 to-transparent animate-pulse" />
                  )}
                </div>
                <p className="text-xs text-gray-400 mt-2 group-hover:text-gray-300 transition-colors">
                  {testimonial.name.split(" ")[0]}
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
