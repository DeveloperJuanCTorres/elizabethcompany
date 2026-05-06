'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaClock, FaTimes, FaShoppingCart } from 'react-icons/fa';

const CTABanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Fecha objetivo: 7 días desde ahora
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 7);

    const timer = setInterval(() => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 120 }}
          className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-[#f7fafc] via-[#ffeaea] to-[#fbe9e7] text-black p-4 z-50"
          
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="bg-orange-500/20 p-2 rounded-full">
                  <FaClock className="w-5 h-5 text-orange-500" />
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-2">
                  <span className="font-semibold text-black">¡Oferta Especial Termina en:</span>
                  <div className="flex gap-2">
                    <div className="bg-gray-200 px-3 py-1 rounded-lg">
                      <span className="font-bold text-black">{timeLeft.days}</span>d
                    </div>
                    <div className="bg-gray-200 px-3 py-1 rounded-lg">
                      <span className="font-bold text-black">{timeLeft.hours}</span>h
                    </div>
                    <div className="bg-gray-200 px-3 py-1 rounded-lg">
                      <span className="font-bold text-black">{timeLeft.minutes}</span>m
                    </div>
                    <div className="bg-gray-200 px-3 py-1 rounded-lg">
                      <span className="font-bold text-black">{timeLeft.seconds}</span>s
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <motion.a
                  href="https://wa.me/51976786987?text=Hola vengo de la pagina web, queria saber si hay ofertas disponibles sobre sus productos, gracias"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer bg-[#E52226] hover:bg-[#b71c1c] text-white px-5 py-2 rounded-xl font-bold flex items-center gap-2 transition-colors shadow-lg border-2 border-[#E52226] hover:border-[#b71c1c] text-base"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaShoppingCart className="w-4 h-4 text-white" />
                  Ver Oferta
                </motion.a>

                <motion.button
                  onClick={handleClose}
                  className="cursor-pointer text-[#E52226]/60 hover:text-[#E52226] transition-colors bg-[#E52226]/10 p-2 rounded-full"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CTABanner;