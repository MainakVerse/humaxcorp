"use client"

import { useEffect, useRef } from "react"

const brands = [
  { name: "Microsoft", logo: "/brands/microsoft.png" },
  { name: "Google", logo: "/brands/google.png" },
  { name: "Amazon", logo: "/brands/amazon.png" },
  { name: "Apple", logo: "/brands/apple.png" },
  { name: "Meta", logo: "/brands/meta.png" },
  { name: "Netflix", logo: "/brands/netflix.png" }, 
  { name: "Adobe", logo: "/brands/adobe.png" },
  { name: "Spotify", logo: "/brands/spotify.png" },
  { name: "Uber", logo: "/brands/uber.png" },
]

export default function BrandsSection() {
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const slider = sliderRef.current
    if (!slider) return

    const scrollWidth = slider.scrollWidth
    const clientWidth = slider.clientWidth
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 1
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0
      }
      slider.scrollLeft = scrollPosition
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="brands" className="relative bg-gradient-to-b from-black via-gray-900 to-black py-16 md:py-24 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-500/5 to-transparent"></div>

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Join the ranks of successful companies that have elevated their business with HUMAX CORP
          </p>
        </div>

        {/* Brands Slider */}
        <div className="relative">
          <div
            ref={sliderRef}
            className="flex overflow-hidden gap-8 md:gap-12 lg:gap-16"
            style={{ scrollBehavior: "auto" }}
          >
            {/* First set of brands */}
            {brands.map((brand, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 bg-white/10 backdrop-blur-sm rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 group"
              >
                <img
                  src={brand.logo || "/placeholder.png"}
                  
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100  pd-8"
                  loading="lazy"
                  onError={(e) => {
                    console.log(`Failed to load logo for ${brand.name}:`, brand.logo);
                    e.currentTarget.src = "/placeholder.png";
                  }}
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {brands.map((brand, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-20 md:w-40 md:h-24 lg:w-48 lg:h-28 bg-white/10 backdrop-blur-sm rounded-xl border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:scale-105 group"
              >
                <img
                  src={brand.logo || "/placeholder.png"}
                  
                  className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300 opacity-70 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => {
                    console.log(`Failed to load logo for ${brand.name}:`, brand.logo);
                    e.currentTarget.src = "/placeholder.png";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Text */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-yellow-400/80 text-sm md:text-base font-medium">
            And many more companies worldwide trust our expertise
          </p>
        </div>
      </div>
    </section>
  )
}
