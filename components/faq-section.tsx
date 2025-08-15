"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import faqData from "@/data/faq.json"

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <section id="faq" className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-start-2 col-span-10">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-white bg-clip-text text-transparent mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Find answers to common questions about our services and how we can help transform your business.
              </p>
            </div>

            {/* FAQ Accordion */}
            <div className="max-w-4xl mx-auto space-y-4">
              {faqData.faqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-gray-700/30 rounded-2xl overflow-hidden transition-all duration-300 hover:border-yellow-400/30 hover:shadow-lg hover:shadow-yellow-400/10"
                >
                  {/* Question Button */}
                  <button
                    onClick={() => toggleItem(faq.id)}
                    className="w-full px-6 md:px-8 py-6 text-left flex items-center justify-between group transition-all duration-300"
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-white group-hover:bg-gradient-to-r group-hover:from-yellow-400 group-hover:to-yellow-300 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 pr-4">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-300 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                      {openItems.includes(faq.id) ? (
                        <ChevronUp className="w-5 h-5 text-black" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-black" />
                      )}
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      openItems.includes(faq.id) ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 md:px-8 pb-6 pt-2">
                      <div className="h-px bg-gradient-to-r from-transparent via-yellow-400/30 to-transparent mb-4"></div>
                      <p className="text-gray-300 leading-relaxed text-base md:text-lg">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-16">
              <p className="text-gray-300 text-lg mb-6">Still have questions? We're here to help.</p>
              <button className="px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-300 text-black font-semibold rounded-full hover:shadow-lg hover:shadow-yellow-400/25 transition-all duration-300 hover:scale-105">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
