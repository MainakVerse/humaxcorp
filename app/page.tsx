import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import AboutSection from "@/components/about-section"
import FAQSection from "@/components/faq-section"
import TestimonialsSection from "@/components/testimonials-section"
import BrandsSection from "@/components/brands-section"
import ContactSection from "@/components/contact-section"
import FooterSection from "@/components/footer-section"
import BackToTopButton from "@/components/back-to-top-button"

export default function Home() {
  return (
    <main>
      <Navigation />
      <BackToTopButton />
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FAQSection />
        <TestimonialsSection />
        <BrandsSection />
        <ContactSection />
        <FooterSection />
        
    
    </main>
  )
}
