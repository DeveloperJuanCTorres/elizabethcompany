'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FaUsers, FaBoxOpen, FaTruck, FaStar, FaArrowRight } from 'react-icons/fa';
import CountUp from 'react-countup';
import Link from 'next/link';


const stats = [
  {
    id: 1,
    number: 10000,
    label: 'Clientes Satisfechos',
    icon: <FaUsers className="w-8 h-8" />,
    suffix: '+',
    description: 'Empresas que confían en nosotros'
  },
  {
    id: 2,
    number: 5000,
    label: 'Productos Entregados',
    icon: <FaBoxOpen className="w-8 h-8" />,
    suffix: '+',
    description: 'Equipos de protección personal'
  },
  {
    id: 3,
    number: 95,
    label: 'Tasa de Entrega',
    icon: <FaTruck className="w-8 h-8" />,
    suffix: '%',
    description: 'Entregas a tiempo'
  },
  {
    id: 4,
    number: 4.8,
    label: 'Calificación Promedio',
    icon: <FaStar className="w-8 h-8" />,
    suffix: '/5',
    description: 'Basado en reseñas de clientes'
  }
];
const AnimatedGradientButton = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <motion.div
    whileHover={{ 
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" }
    }}
    whileTap={{ 
      scale: 0.95,
      transition: { duration: 0.1 }
    }}
    className="relative group mt-16"
  >
    <div className="absolute -inset-1 rounded-full blur-xl opacity-75 bg-gradient-to-r from-[#E52226] via-[#ff4d4d] to-[#b71c1c] group-hover:blur-2xl group-hover:opacity-100 transition-all duration-500 animate-gradient-x"></div>
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer" 
      className="relative inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#E52226] via-[#ff4d4d] to-[#b71c1c] px-12 py-5 text-xl font-bold text-white shadow-lg transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-[#E52226]/40"
    >
      {children}
      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-3" />
    </Link>
  </motion.div>
);
const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-gradient-to-b from-[#fff] via-[#fff6f6] to-[#ffeaea] relative overflow-x-clip">
      {/* Fondo decorativo rojo difuminado */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#E52226]/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#E52226]/10 rounded-full blur-2xl z-0" style={{transform: 'translateY(-50%)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block text-[#E52226] text-sm font-semibold mb-3 px-4 py-1 rounded-full bg-[#E52226]/10"
          >
            Nuestros Logros
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-black hover:text-[#E52226] transition-colors mb-3 drop-shadow-sm">Números que Hablan</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Nuestro compromiso con la excelencia reflejado en números que respaldan nuestra trayectoria
          </p>
        </motion.div>

        <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group bg-white/80 border border-white/60 backdrop-blur-xl p-8 rounded-3xl text-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <motion.div
                className="text-[#E52226] mb-6 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 text-4xl"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {stat.icon}
              </motion.div>
              <motion.h3
                className="text-4xl font-extrabold text-[#222] mb-2"
                animate={isInView ? { scale: [0.9, 1.05, 1], opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                {isInView && (
                  <>
                    <CountUp
                      end={stat.number}
                      duration={2}
                      decimals={stat.id === 4 ? 1 : 0}
                      className="inline-block"
                    />
                    <span className="text-[#E52226]">{stat.suffix}</span>
                  </>
                )}
              </motion.h3>
              <h4 className="text-[#E52226] font-bold mb-2">{stat.label}</h4>
              <p className="text-gray-600 text-sm font-medium">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
          {/* Call to Action Button */}
          <div className="flex justify-center pb-16">
          <AnimatedGradientButton href="https://wa.me/51976786987?text=Hola vengo de la pagina web, queria ver todo su catalogo de productos, gracias">
            Explorar Tienda
          </AnimatedGradientButton>
        </div>
        {/* Ola decorativa inferior */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden transform rotate-180">
        <svg
          className="relative block w-full h-[40px] lg:h-[60px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-white"
          />
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            className="fill-white opacity-40"
          />
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            className="fill-white opacity-20"
          />
        </svg>
      </div>
    </section>
  );
};

export default StatsSection;
