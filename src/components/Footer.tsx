'use client';

import { motion } from 'framer-motion';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaMapMarkerAlt, FaPhone, FaEnvelope, FaTiktok } from 'react-icons/fa';
import Image from 'next/image';
import logo from '@/app/assets/logos/logo.png';
import { toast } from 'react-hot-toast';
import { useState } from 'react';

interface FooterProps {
  sections: {
    inicio: React.RefObject<HTMLElement>;
    nosotros: React.RefObject<HTMLElement>;
    productos: React.RefObject<HTMLElement>;
    contacto: React.RefObject<HTMLElement>;
  };
}

const Footer = ({ sections }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const [showTooltip, setShowTooltip] = useState(false);

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Productos", href: "#productos" },
    { name: "Contacto", href: "#contacto" }
  ];

  const categories = [
    { name: "Cascos de Seguridad", href: "https://wa.me/51976786987?text=Hola, queria saber todo sobre cascos de seguridad" },
    { name: "Guantes Industriales", href: "https://wa.me/51976786987?text=Hola, queria saber todo sobre guantes industriales" },
    { name: "Lentes de Protección", href: "https://wa.me/51976786987?text=Hola, queria saber todo sobre lentes de protección" },
    { name: "Calzado de Seguridad", href: "https://wa.me/51976786987?text=Hola, queria saber todo sobre calzado de seguridad" },
    { name: "Ropa de Trabajo", href: "https://wa.me/51976786987?text=Hola, queria saber todo sobre ropa de trabajo" }
  ];

  const legalLinks = [
    { name: "Términos y Condiciones", href: "/legal/terminos" },
    { name: "Política de Privacidad", href: "/legal/privacidad" }
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="w-5 h-5" />,
      text: "Av. Alfonso Ugarte N° 1630 - Cercado de Chiclayo, Perú"
    },
    {
      icon: <FaPhone className="w-5 h-5" />,
      text: "976 786 987"
    },
    {
      icon: <FaEnvelope className="w-5 h-5" />,
      text: "elizabethcompanyeirl@gmail.com"
    }
  ];

  const socialMedia = [
    {
      icon: <FaWhatsapp className="w-5 h-5" />,
      name: "WhatsApp",
      href: "https://wa.me/51976786987"
    },
    {
      icon: <FaFacebook className="w-5 h-5" />,
      name: "Facebook",
      href: "https://www.facebook.com/ElizabethCompanyEIRL/"
    },
    {
      icon: <FaInstagram className="w-5 h-5" />,
      name: "Instagram",
      href: "https://www.instagram.com/eli.zabethcompany/"
    },
    {
      icon: <FaYoutube className="w-5 h-5" />,
      name: "YouTube",
      href: "https://www.youtube.com/channel/UC8-WiGsjXTG1uG-I-vry74g"
    },
    {
      icon: <FaTiktok className='w-5 h-5' />,
      name: "TikTok",
      href: "https://www.tiktok.com/@elizabethcompanyirl"
    }
  ];

  const handlePetuCodeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    toast.custom(
      (t) => (
        <div
          className={`${
            t.visible ? 'animate-fade-in' : 'animate-fade-out'
          } fixed bottom-4 right-4 w-80 bg-white rounded-lg shadow-2xl`}
        >
          <div className="flex items-center justify-between px-4 py-2 rounded-t-lg bg-blue-800">
            <div className="flex items-center space-x-2 bg-blue-800">
              <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="text-white font-medium">CobalTech</span>
            </div>
            <button
              onClick={() => toast.dismiss(t.id)}
              className="text-white hover:text-indigo-100 transition-colors"
            >
              <svg className="cursor-pointer w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
          <div className="p-4">
            <p className="text-gray-800">
              Desarrollado por <span className="font-semibold">CobalTech</span>
            </p>
            <p className="text-sm text-gray-500 mt-1">Justo ahora</p>
          </div>
        </div>
      ),
      {
        duration: 10000,
        position: 'bottom-right',
      }
    );
  
    // Abrir el link de CobalTech en una nueva pestaña
    window.open('https://cobaltech.com', '_blank');
  };
  

  const handleQuickLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const targetSection = sections[sectionId as keyof typeof sections]?.current;

    if (targetSection) {
      const headerOffset = 100; // Ajuste para el navbar fijo
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-white text-black border-t-4 border-[#E52226]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="relative w-60 h-20">
              <Image
                src={logo}
                alt="Logo de Elizabeth Company"
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className="object-contain" 
              />
            </div>
            <p className="text-gray-600">
              Líderes en equipos de protección personal y seguridad industrial en el Perú. 
            </p>
            <div className="flex gap-4">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#E52226]/70 hover:text-[#E52226] transition-colors bg-[#E52226]/10 p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enlaces Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-gray-700">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleQuickLinkClick(e, link.href)}
                    className="text-gray-700 hover:text-[#E52226] transition-colors font-medium"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Categorías */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-gray-700">Categorías</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a
                    href={category.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 hover:text-[#E52226] transition-colors font-medium"
                  >
                    {category.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-bold text-gray-700">Contacto</h3>
            <ul className="space-y-3">
              {contactInfo.map((info, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3"
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-[#E52226] mt-1">{info.icon}</div>
                  <span className="text-gray-700 font-medium">{info.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Línea Separadora */}
        <div className="border-t border-[#E52226]/10 my-8" />

        {/* Información Legal y Créditos */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-gray-500 text-sm text-center md:text-left">
            © {currentYear} Elizabeth Company. Todos los derechos reservados.
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link, index) => (
                <motion.span
                  key={index}
                  className="text-gray-400 text-sm font-medium cursor-not-allowed"
                >
                  {link.name} 
                </motion.span>
              ))}
            </div>
            <motion.a
              href="#"
              onClick={handlePetuCodeClick}
              className="text-gray-500 hover:text-[#E52226] text-sm transition-colors cursor-pointer font-medium relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              Desarrollado por CobalTech
              {showTooltip && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-1/2 -translate-x-1/2 bg-blue-800 bottom-full mb-2 px-4 py-2 rounded-lg bg-black text-white text-xs shadow-lg z-50 whitespace-nowrap"
                >
                  Agencia de desarrollo web
                  <span className=" absolute left-1/2 top-full -translate-x-1/2 w-3 h-3 overflow-hidden">
                    <svg width="12" height="6" viewBox="0 0 12 6" className="block">
                      <polygon points="6,6 0,0 12,0" fill="black" className='bg-blue-800'/>
                    </svg>
                  </span>
                </motion.div>
              )}
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 