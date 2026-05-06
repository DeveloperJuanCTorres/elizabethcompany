'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaWhatsapp, FaShoppingCart } from 'react-icons/fa';

interface LandingNavbarProps {
  sections: {
    inicio: React.RefObject<HTMLElement>;
    nosotros: React.RefObject<HTMLElement>;
    productos: React.RefObject<HTMLElement>;
    contacto: React.RefObject<HTMLElement>;
  };
}

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#productos', label: 'Productos' },
  { href: '#contacto', label: 'Contacto' },
];

const LandingNavbar = ({ sections }: LandingNavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    const targetSection = sections?.[sectionId as keyof typeof sections]?.current;

    if (targetSection) {
      const headerOffset = 100; // Ajuste para el navbar fijo
      const elementPosition = targetSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }

    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 ${isScrolled ? 'shadow-lg' : ''}`}>
      <nav className="py-3 relative w-full overflow-visible">
        {/* Fondo rojo detrás del todo */}
        <div className="absolute inset-0 w-full min-h-full bg-[#E52226] z-[-1]" />
        {/* Fondo con blanco en diagonal solo para la izquierda en md+ */}
        <div
          className="hidden md:block absolute left-0 top-0 h-full z-0"
          style={{
            width: '750px',
            backgroundColor: 'white',
            clipPath: 'polygon(0 0, 90% 0, 100% 100%, 0% 100%)',
          }}
        />
        {/* Contenido centrado */}
        <div className="max-w-7xl mx-auto flex items-center justify-between relative z-20 px-4">
          {/* Logo + Nombre + Eslogan */}
          <div className="flex items-center pr-6 hover:scale-105 transition-all duration-300" style={{ minWidth: '200px', minHeight: '56px' }}>
            <div className="relative w-10 h-10 md:w-12 md:h-12 flex items-center justify-center mr-2 md:mr-3 bg-white rounded-md md:rounded-none md:bg-transparent z-10">
              <Image
                src="/favicon.ico"
                alt="Logo Elizabeth Company"
                fill
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className="object-contain"
              />
            </div>
            <a href='#inicio' onClick={(e) => handleNavClick(e, '#inicio')}>
            <div className="flex flex-col justify-center">
              <span className="font-extrabold text-base md:text-lg text-black leading-tight tracking-wide">ELIZABETH COMPANY</span>
              <span className="text-xs md:text-xs text-black md:text-[#E52226] font-semibold tracking-wider">CALIDAD AL MEJOR PRECIO</span>
            </div>
            </a>
          </div>

          {/* Links de navegacion en computadora jeje (PC) */}
          <div className="hidden md:flex items-center space-x-8 z-20">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white hover:text-black transition-colors font-semibold text-base px-2 relative after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-black after:left-0 after:bottom-[-4px] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 max-[1660px]:text-black max-[1600px]"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA botón desktop */}
          <div className="hidden md:flex items-center space-x-4 z-20">
          <Link
              href= "https://wa.me/51976786987?text=Hola vengo de la pagina web, queria ver todo su catalogo de productos, gracias"
              target="_blank"
              className="inline-flex items-center justify-center bg-white border-2 border-none text-[#F44336] px-4 py-2 rounded-md font-semibold text-sm relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center transition-colors duration-300 group-hover:text-white">
                <FaShoppingCart className="mr-2 text-lg" />
                Ver Tienda
              </span>
              <div className="absolute inset-0 bg-[#F44336] transform scale-x-0 origin-left transition-transform duration-500 ease-out group-hover:scale-x-100"></div>
            </Link>
            <Link
              href="https://wa.me/51976786987"
              target="_blank"
              className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md transition-colors"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-xl" />
            </Link>
          </div>

          {/* Botón para el menú en teléfono */}
          <button
            onClick={toggleMenu}
            className="cursor-pointer md:hidden text-white p-2 focus:outline-none hover:text-black transition-colors z-20"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
          </button>
        </div>

        {/* Menu en Teléfono */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="md:hidden fixed top-16 left-0 right-0 bg-[#E52226] px-4 py-6 space-y-4 z-40 shadow-lg rounded-b-xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block text-white py-3 px-2 rounded-md hover:bg-white/10 transition-colors border-b border-white/10 font-semibold"
                >
                  {link.label}
                </a>
              ))}

              <div className="flex flex-col gap-4 pt-4">
                <Link
                  href="https://wa.me/51976786987"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium py-3 rounded-md shadow-md transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <FaWhatsapp className="text-lg" />
                  Escríbenos por WhatsApp
                </Link>
                <Link
                  href="https://e-commerce-eta-roan.vercel.app/tienda"
                  target="_blank"
                  className="flex items-center justify-center gap-2 bg-white text-[#E52226] hover:bg-gray-200 hover:text-white font-bold py-3 rounded-md shadow-md border-2 border-white hover:border-[#E52226] transition-all duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Ver Tienda
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default LandingNavbar;