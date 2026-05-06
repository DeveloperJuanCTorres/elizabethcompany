'use client';

import { motion } from 'framer-motion';
import { FaArrowLeft, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import notFound from '@/app/assets/error/404.png';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-96 h-96 mx-auto mb-8"
        >
          <div className="absolute inset-x-0 bottom-[-1px]  z-10" />
          <Image
            src={notFound}
            alt="Error 404"
            fill
            className="object-contain"
          />
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-6xl font-bold text-[#E52226] mb-4"
        >
          404
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-gray-700 mb-8"
        >
          ¡Ups! La página que estás buscando no existe.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/"
            className="group flex items-center justify-center gap-2 bg-[#E52226] text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#b71c1c]"
          >
            <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
            Volver al inicio
          </Link>

          <Link
            href="https://e-commerce-eta-roan.vercel.app/tienda"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-2 bg-white border-2 border-[#E52226] text-[#E52226] px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#E52226] hover:text-white hover:border-[#b71c1c]"
          >
            Ir a la tienda
            <FaShoppingCart className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
} 