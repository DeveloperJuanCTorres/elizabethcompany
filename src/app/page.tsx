'use client';

import { useRef } from 'react';
import LandingNavbar from "@/components/LandingNavbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import LiveChat from "@/components/LiveChat";
export default function Home() {
  const inicioRef = useRef<HTMLElement>(null!);
  const nosotrosRef = useRef<HTMLElement>(null!);
  const productosRef = useRef<HTMLElement>(null!);
  const contactoRef = useRef<HTMLElement>(null!);

  const sections = {
    inicio: inicioRef,
    nosotros: nosotrosRef,
    productos: productosRef,
    contacto: contactoRef
  };

  return (
    <main className="min-h-screen">
      <LandingNavbar sections={sections} />
      <section ref={inicioRef} id="inicio">
        <HeroSection />
      </section>
      <section ref={productosRef} id="productos">
        <ProductsSection />
      </section>
      <BenefitsSection />
      <section ref={nosotrosRef} id="nosotros">
        <AboutSection />
      </section>
      <StatsSection />
      <section ref={contactoRef} id="contacto">
        <ContactSection />
      </section>
      <LiveChat />
      <CTABanner />
      <Footer sections={sections} />
    </main>
  );
}
