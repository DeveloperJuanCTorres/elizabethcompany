'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import hero from '@/app/assets/hero/hero-1.png';
import { FaArrowRight, FaEnvelope, FaShieldAlt } from 'react-icons/fa';
import { MdVerified } from 'react-icons/md';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full overflow-hidden flex items-center bg-gradient-to-br from-[#f7fafc] via-[#ffeaea] to-[#fbe9e7]"
    >
      {/* Formas abstractas de fondo */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-[#F44336]/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-[#E52226]/20 rounded-full blur-2xl z-0" style={{transform: 'translateY(-50%)'}} />
      <div className="absolute bottom-0 left-1/2 w-[300px] h-[300px] bg-[#F44336]/10 rounded-full blur-2xl z-0" style={{transform: 'translateX(-50%)'}} />

      {/* Layout principal: texto a la izquierda, imagen a la derecha */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 flex flex-col-reverse lg:flex-row items-center justify-between min-h-screen gap-4 lg:gap-0">
        {/* Texto y CTA */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left py-0 lg:py-0">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#222] mb-4 leading-tight"
          >
            <span className="inline-block  px-2 rounded-lg">Protege a tu equipo</span>
            <br />
            <span className="text-[#F44336]">con Seguridad Real</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-700 mb-8"
          >
            Soluciones en protección industrial, calidad garantizada y asesoría personalizada para empresas que cuidan a su gente.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start"
          >
            <Link
              href="#productos"
              className="inline-flex items-center justify-center bg-[#F44336] hover:bg-[#e53935] text-white px-8 py-3 rounded-xl text-lg font-bold transition-colors duration-300 group shadow-lg"
            >
              <FaShieldAlt className="mr-2" />
              Ver Catálogo
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center bg-white border-2 border-[#F44336] text-[#F44336] px-8 py-3 rounded-xl text-lg font-bold relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center transition-colors duration-300 group-hover:text-white">
                <FaEnvelope className="mr-2" />
                Contáctanos
              </span>
              <div className="absolute inset-0 bg-[#F44336] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
            </Link>
          </motion.div>
        </div>
        {/* Imagen circular con máscara */}
        <div className="flex-1 flex items-center justify-center w-full h-full py-8 lg:py-0 mt-30 lg:mt-0">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex-shrink-0">
            <Image
              src={hero}
              alt="Equipo de trabajo de Elizabeth Company - Seguridad Industrial - EPP de alta calidad"
              fill
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              className="object-cover rounded-full border-4 border-[#F44336] shadow-lg"
              priority
            />
            {/* Badge de confianza */}
            <div className="absolute -bottom-3 -right-3 bg-white rounded-full p-2 shadow-md flex items-center gap-1 border border-[#F44336]">
              <MdVerified className="text-[#43a047] w-6 h-6" />
              <span className="text-xs font-bold text-[#43a047]">Certificado</span>
            </div>
          </div>
        </div>
      </div>

      {/* Iconos flotantes de seguridad */}
      {/*
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="absolute left-10 hidden md:block"
      >
        <FaHardHat className="text-[#F44336] w-14 h-14 opacity-30" />
      </motion.div>
      */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 right-10 hidden md:block"
      >
        <FaShieldAlt className="text-[#F44336] w-16 h-16 opacity-20" />
      </motion.div>
      {/* Ola divisoria SVG */}
      <div className="absolute bottom-0  left-0 w-full overflow-hidden">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-[60px]"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-[#f7fafc]"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;