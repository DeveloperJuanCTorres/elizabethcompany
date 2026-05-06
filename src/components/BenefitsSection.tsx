'use client';

import { motion } from 'framer-motion';
import { FaShieldAlt, FaTruck, FaHeadset, FaCertificate  } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaShieldAlt className="w-8 h-8 text-white" />,
    title: "Calidad Garantizada",
    description: "Todos nuestros productos cumplen con los más altos estándares de seguridad industrial",
    color: "bg-orange-500"
  },
  {
    icon: <FaTruck className="w-8 h-8 text-white" />,
    title: "Llegamos a todo el Perú",
    description: "Contamos con un amplio stock y una red de distribución que nos permite llegar a cualquier parte del país",
    color: "bg-blue-500"
  },
  {
    icon: <FaHeadset className="w-8 h-8 text-white" />,
    title: "Pagos Seguros",
    description: "Contamos con un sistema de pago seguro y confiable para que puedas realizar tus compras sin preocupaciones",
    color: "bg-green-500"
  },
  {
    icon: <FaCertificate className="w-8 h-8 text-white" />,
    title: "Certificaciones",
    description: "Contamos con certificaciones de calidad de nuestros productos",
    color: "bg-purple-500"
  }
];


const BenefitsSection = () => {
  return (
    <section className="py-24 relative overflow-x-clip bg-white"> {/* Added bg-white to force light background */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-[30px] rotate-180"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            className="fill-white"
          />
        </svg>
      </div>
      {/* Fondo decorativo rojo difuminado */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#E52226]/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#E52226]/10 rounded-full blur-2xl z-0" style={{transform: 'translateY(-50%)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título Principal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#E52226] mb-4 pt-10 tracking-tight drop-shadow-sm">
            ¿Por qué elegir Elizabeth Company?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Líderes en equipos de protección personal y seguridad industrial en Perú. Calidad, confianza y atención personalizada.
          </p>
        </motion.div>

        {/* Grid de Beneficios */}
        <div className="cursor-pointer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl border border-white/60 p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-2"
            >
              {/* Diagonal decorativa */}
              <div className="absolute -top-1 -left-1 w-24 h-24 bg-[#E52226]/10 rounded-tl-3xl rounded-br-3xl -z-1" style={{clipPath: 'polygon(0 0, 100% 0, 0 100%)'}} />
              {/* Icono */}
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#E52226]/90 shadow-lg mb-6 border-4 border-white">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-[#222] mb-3 group-hover:text-[#E52226] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 font-medium">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;