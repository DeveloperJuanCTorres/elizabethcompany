'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaUsers, FaAward, FaEye, FaBullseye, FaHandshake, FaChartLine } from 'react-icons/fa';
import team from '@/app/assets/team/team01.png';
import { useState } from 'react';

const AboutSection = () => {
  const [showModal, setShowModal] = useState(false);
  
  return (
    <section className="py-28 bg-gradient-to-b from-white via-[#fff9f9] to-[#ffefef] relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-[#E52226]/10 rounded-full blur-[100px] z-0" />
      <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-[#E52226]/10 rounded-full blur-[80px] z-0" />
      <div className="absolute bottom-20 left-1/4 w-[300px] h-[300px] bg-[#E52226]/05 rounded-full blur-[60px] z-0" />
      
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.span 
            className="inline-block text-[#E52226] text-sm font-semibold mb-4 px-5 py-1.5 rounded-full bg-[#E52226]/10 border border-[#E52226]/20"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
          >
            Sobre Nosotros
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-gray-900 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Innovación en <span className="text-[#E52226]">Seguridad Industrial</span>
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Más de una década protegiendo a los trabajadores peruanos con equipos de calidad certificada 
            y soluciones personalizadas para cada necesidad industrial.
          </motion.p>
        </motion.div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Texto y estadísticas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="text-3xl font-bold text-gray-900">
              Excelencia en <span className="text-[#E52226]">Protección Laboral</span>
            </h3>
            
            <p className="text-gray-600 leading-relaxed">
              En Elizabeth Company nos especializamos en proveer equipos de protección personal 
              que cumplen con los más altos estándarea. Nuestra trayectoria nos 
              avala como líderes en el sector de seguridad industrial en Perú.
            </p>
            
            <div className="grid grid-cols-2 gap-5">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#E52226] mb-4 flex items-center justify-center w-12 h-12 bg-[#E52226]/10 rounded-lg">
                  <FaUsers className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">+15 Profesionales</h4>
                <p className="text-sm text-gray-600">
                  Equipo multidisciplinario comprometido con tu seguridad.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#E52226] mb-4 flex items-center justify-center w-12 h-12 bg-[#E52226]/10 rounded-lg">
                  <FaAward className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">+50 Certificaciones</h4>
                <p className="text-sm text-gray-600">
                  Productos avalados por normas de calidad.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#E52226] mb-4 flex items-center justify-center w-12 h-12 bg-[#E52226]/10 rounded-lg">
                  <FaHandshake className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">+10000 Clientes</h4>
                <p className="text-sm text-gray-600">
                  Empresas y trabajadores que confían en nuestros productos y servicios.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                whileHover={{ y: -5 }}
              >
                <div className="text-[#E52226] mb-4 flex items-center justify-center w-12 h-12 bg-[#E52226]/10 rounded-lg">
                  <FaChartLine className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2 text-lg">+10 Años</h4>
                <p className="text-sm text-gray-600">
                  De experiencia en el mercado de seguridad industrial y venta de productos de calidad.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Imagen del equipo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative group cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <div className="absolute inset-0 bg-[#E52226]/20 rounded-2xl transform group-hover:scale-95 transition-all duration-500"></div>
            <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden shadow-2xl border-4 border-white transform group-hover:-translate-y-2 transition-all duration-300">
              <Image
                src={team}
                alt="Equipo de Elizabeth Company"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="inline-block mb-2 px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
                    Nuestro Equipo
                  </span>
                  <h3 className="text-2xl font-bold">Profesionales Certificados</h3>
                  <p className="text-white/90">Haz clic para ampliar</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Visión y Misión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute -right-10 -top-10 w-32 h-32 bg-[#E52226]/10 rounded-full blur-[60px] z-0"></div>
            <div className="relative z-10">
              <div className="text-[#E52226] mb-5 flex items-center justify-center w-14 h-14 bg-[#E52226]/10 rounded-xl">
                <FaEye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Nuestra Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconocidos como el principal referente en equipos de protección personal en Latinoamérica, 
                destacando por nuestra innovación, calidad certificada y compromiso con la seguridad laboral. 
                Aspiramos a expandir nuestra presencia global manteniendo nuestros valores fundamentales.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 relative overflow-hidden group"
          >
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-[#E52226]/10 rounded-full blur-[60px] z-0"></div>
            <div className="relative z-10">
              <div className="text-[#E52226] mb-5 flex items-center justify-center w-14 h-14 bg-[#E52226]/10 rounded-xl">
                <FaBullseye className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-5">Nuestra Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Proveer soluciones integrales de seguridad industrial que garanticen la protección de los 
                trabajadores en todos los sectores productivos. Nos comprometemos a ofrecer productos de 
                última generación, asesoría especializada y un servicio personalizado que genere valor 
                a nuestros clientes.
              </p>
            </div>
          </motion.div>
        </div>

       {/* Modal de imagen grande */}
       {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fade-in">
            <div className="relative max-w-3xl w-full mx-4">
              <button
                onClick={() => setShowModal(false)}
                className="cursor-pointer absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-[#E52226] rounded-full p-2 shadow-lg transition-colors"
                aria-label="Cerrar imagen"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-white">
                <Image
                  src={team}
                  alt="Equipo de trabajo de Elizabeth Company"
                  width={900}
                  height={600}
                  className="object-contain w-full h-auto max-h-[80vh]"
                  priority
                />
              </div>
            </div>
          </div>
        )}
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

export default AboutSection;