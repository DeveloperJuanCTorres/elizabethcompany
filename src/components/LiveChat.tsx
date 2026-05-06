'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaTimes, FaPaperPlane, FaEnvelope, FaStore, FaCode } from 'react-icons/fa';
import Image from 'next/image';
import logo from '@/app/assets/logo.ico';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! 👋 ¿En qué podemos ayudarte el dia de hoy?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Modified to always redirect to WhatsApp - aca podemos poner el chat con respuestas automaticas... (que estan mas abajo del codigo:b)
  const handleChatClick = () => {
    handleWhatsAppRedirect();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');

    setTimeout(() => {
        const userQuery = inputMessage.toLowerCase();
      
        const faqResponses = [
          {
                keywords: ['hola', 'buenos dias', 'buenas tardes', 'buenas noches', 'buenas', 'ola', 'olap', 'holaaaaa'],
                response: '¡Hola! 👋 ¿En qué podemos ayudarte el dia de hoy?',
          },
          {
            keywords: ['precio', 'costo', 'cotizacion', 'cotizaciones'],
            response: 'Nuestros precios varían según el tipo y la cantidad de productos. Para obtener una cotización personalizada, por favor contactanos por WhatsApp o ingresa a nuestra Tienda en linea.'
          },
          {
            keywords: ['envío', 'entrega', 'envio', 'envios', 'envios a todo el peru'],
            response: 'Realizamos envíos a todo el Perú. El tiempo de entrega depende de tu ubicación. Para mas información, puedes contactarnos por WhatsApp o visitar nuestra tienda en linea.'
          },
          {
            keywords: ['productos', 'products', 'equipamiento', 'EPP', 'equipos de seguridad'],
            response: 'Tenemos una variedad de productos de seguridad para diferentes tipos de trabajo y riesgos. Si necesitas ayuda para elegir el producto adecuado, puedes visitar nuestra Tienda en linea o contactarnos por WhatsApp.'
          },
          {
            keywords: ['contacto', 'comunicar', 'comunicarse', 'comunicarme', 'comunico', 'contactanos', 'contactar', 'contactar con nosotros', 'contactar con nosotros', 'contactar con nosotros', 'contactar con nosotros'],
            response: 'Puedes contactarnos por WhatsApp o mediante el formulario de contacto. También puedes visitarnos en nuestra tienda física en Chiclayo, Perú.'
          },
          {
            keywords: ['devolucion', 'cambio', 'devoluciones', 'cambios'],
            response: 'Aceptamos devoluciones o cambios dentro de los 7 días posteriores a la recepción del pedido, siempre que los productos estén en su estado original y con el embalaje completo. ¿Cuál es el motivo de tu devolución o cambio?'
          },
          {
            keywords: ['compras', 'comprar', 'compras en linea', 'hacer una compra', 'pedidos', 'pedido', 'compra', 'realizar una compra', 'realizar una compra en linea', 'realizar una compra en linea', 'realizar una compra en linea', 'realizar una compra en linea'],
            response: 'Puedes realizar tu compra directamente en nuestra tienda en línea. Solo haz clic en el botón "Tienda". Ahí encontrarás todos nuestros productos disponibles.'
          },
          {
            keywords: ['certificado', 'normas', 'normativa'],
            response: 'Sí, todos nuestros EPP cumplen con normativas vigentes y cuentan con certificaciones. ¿Qué tipo de certificado necesitas verificar?'
          },
          {
            keywords: ['mayorista', 'corporativo', 'mayoristas', 'corporativos'],
            response: 'Para ventas al por mayor o corporativas, contáctanos por WhatsApp o mediante el formulario para brindarte atención personalizada y precios especiales.'
          },
          {
            keywords: ['asesoramiento', 'recomiendan', 'recomendar'],
            response: 'Nuestro equipo puede asesorarte para elegir el EPP adecuado. Por favor, cuéntanos sobre el tipo de trabajo o riesgo al que te enfrentas. '
          },
          {
            keywords: ['horario', 'horarios', 'horario de atencion', 'horario de atenciones'],
            response: 'Nuestro horario de atención es de lunes a viernes, de 8:00 AM a 7:00 PM. ¿En qué podemos ayudarte hoy?'
          },
          {
            keywords: ['garantia', 'garantias', 'garantiasleu de los productos', 'garantias de los productos'],
            response: 'Todos nuestros productos cuentan con garantía de fábrica. ¿Qué tipo de garantía necesitas verificar?'
          },
          {
            keywords: ['Ofertas', 'ofertas', 'ofertas', 'ofertitas', 'promos', 'promociones', 'promocion'],
            response: 'Actualmente contamos con una variedad de ofertas y promociones. Para poder verlas ingresa a nuestra tienda en linea.'
          },
          {
            keywords: ['tienda', 'E-commerce', 'e-commerce', 'tienda en linea', 'tienda en linea', 'tienda en linea', 'tienda en linea'],
            response: 'Visita nuestra Tienda en linea para ver nuestros productos y realizar tus compras de la mejor calidad y al mejor precio.'
          },
          {
            keywords: ['hicieron esta pagina', 'creo', 'pagina web', 'desarrollador', 'desarrolladores', 'desarrolló', 'crearon', 'creador', 'creó', 'creadores', 'creado', 'desarrolladores', 'programador', 'programó',  'programadores', 'programador web', 'programadores web'],
            response: 'Todo lo que ves en esta pagina web fue desarrollado por CobalTech (Incluyendome 👀). Si necesitas ayuda con tu sitio web, no dudes en contactar a CobalTech.'
          },
          {
            keywords: ['marcas', 'partners', 'marcas de seguridad'],
            response: 'Trabajamos con las mejores marcas de seguridad del mercado. Si necesitas ayuda para elegir el producto adecuado, no dudes en contactarnos.'
          },
          {
            keywords: ['quienes somos', 'quienes son'],
            response: 'Elizabeth Company es una empresa que se dedica a la venta de productos de seguridad. Contamos con una variedad de productos de seguridad para diferentes tipos de trabajo y riesgos.'
          },
          {
            keywords: ['Gracias', 'gracias', 'chau', 'bye', 'bai', 'adios', 'hasta luego', 'nos vemos', 'graciass', 'hasta pronto'],
            response: 'De nada, nos vemos pronto. ¡Que tengas un excelente dia! 👍'
          },
          {
            keywords: ['como tas', 'como estas', 'que tal', 'how are u', 'como vas', 'todo bien?'],
            response: 'Estoy bien, gracias por preguntar. ¿En qué puedo ayudarte hoy?'
          },
          {
            keywords: ['oka', 'ok', 'okay', 'okey', 'okei', 'oki', 'okis'],
            response: 'Okay, si necesitas ayuda con algo, no dudes en hablar conmigo.'
          }
        ];
      
        
        const matchedResponse = faqResponses.find((response) => response.keywords.some((keyword) => userQuery.includes(keyword)));

      
        const botResponse: Message = {
          id: messages.length + 2,
          text: matchedResponse
            ? matchedResponse.response
            : 'Gracias por tu mensaje. No tengo la respuesta específica a tu consulta en este momento. Para una atención más rápida y personalizada, te invitamos a contactarnos por WhatsApp.',
          sender: 'bot',
          timestamp: new Date()
        };
      
        setMessages(prev => [...prev, botResponse]);
      
        setTimeout(() => scrollToBottom(), 500);
      }, 1000);
      
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleWhatsAppRedirect = () => {
    window.open('https://wa.me/51976786987', '_blank');
  };

  const renderBotResponse = (message: Message) => (
    <motion.div
      key={message.id}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start"
    >
      <div className="max-w-[80%] rounded-2xl p-3 bg-white text-gray-800 shadow-md">
        <p className="text-sm">{message.text}</p>
        <span className="text-xs opacity-70 mt-1 block">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
  
        
  
        {/* Botón específico para la respuesta de "desarrolladores" */}
        {message.text.includes('CobalTech') && (
          <motion.a
            href="https://cobaltech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center bg-blue-800 text-white p-2 rounded-md hover:bg-blue-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCode className="cursor-pointer w-4 h-4 mr-2" /> Visitar CobalTech
          </motion.a>
        )}
        {/* Botón para visitar la tienda */}
        {message.text.includes('Tienda') && (
          <motion.a
            href="https://www.compactseguridad.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center bg-blue-800 text-white p-2 rounded-md hover:bg-blue-900 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaStore className="cursor-pointer w-4 h-4 mr-2" /> Visitar Tienda
          </motion.a>
        )}
        {message.text.includes('WhatsApp') && (
          <motion.a
            href="https://wa.me/51976786987"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaWhatsapp className="cursor-pointer w-4 h-4 mr-2" /> Contactar por WhatsApp
          </motion.a>
        )}
      </div>
    </motion.div>
  );
  

  return (
    <>
      {/* Widget Flotante - Modified to always redirect to WhatsApp */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleChatClick}
        className="fixed bottom-4 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
      >
        <div className="absolute inset-0 rounded-full animate-ping bg-green-300 opacity-75"></div>
        <div className="absolute inset-0 rounded-full bg-green-500"></div>
        <div className="group relative z-10">
          <FaWhatsapp className="cursor-pointer w-8 h-8" />
          <span className="invisible group-hover:visible absolute top-1/2 right-10 -translate-y-1/2 mr-4 bg-gradient-to-r from-green-600 to-green-500 text-white text-sm py-1 px-3 rounded-lg whitespace-nowrap">
            ¿Necesitas Ayuda? Contáctanos
          </span>
        </div>
      </motion.button>

      {/* Chat view - Preserved but will never be shown due to modified handleChatClick */}
      {false && !isMobile && (
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              className="fixed bottom-24 right-6 z-50 w-96 h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="bg-[#E52226] p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative w-10 h-10">
                    <Image
                      src={logo}
                      alt="Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Elizabeth Company</h3>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <p className="text-white/80 text-sm">En línea</p>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="cursor-pointer text-white/80 hover:text-white transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>

              {/* Contenedor de mensajes */}
              <div
                ref={chatContainerRef}
                className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50"
              >
                {messages.map((message) => (
                  message.sender === 'user' ? (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex justify-end"
                    >
                      <div className="max-w-[80%] rounded-2xl p-3 bg-[#E52226] text-white">
                        <p className="text-sm">{message.text}</p>
                        <span className="text-xs opacity-70 mt-1 block">
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </span>
                      </div>
                    </motion.div>
                  ) : (
                    renderBotResponse(message)
                  )
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-white border-t">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Escribe un mensaje..."
                    className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#E52226]"
                  />
                  <button
                    onClick={handleSendMessage}
                    className="cursor-pointer text-black p-2 rounded-full transition-colors"
                  >
                    <FaPaperPlane className="w-5 h-5 cursor-pointer" />
                  </button>
                </div>
                <div className="mt-4 flex justify-center space-x-10">
                  <button
                    onClick={handleWhatsAppRedirect}
                    className="cursor-pointer flex items-center space-x-2 text-green-500 hover:text-green-600 transition-colors"
                  >
                    <FaWhatsapp className="cursor-pointer w-5 h-5" />
                    <span>WhatsApp</span>
                  </button>
                  <a
                    href="https://e-commerce-eta-roan.vercel.app/tienda"
                    target="_blank"
                    className="cursor-pointer flex items-center space-x-2 transition-colors text-[#E52226] hover:text-[#b71c1c]"
                  >
                    <FaStore className="cursor-pointer w-5 h-5" />
                    <span>Tienda</span>
                  </a>
                  <a
                    href="mailto:elizabethcompanyeirl@gmail.com"
                    className="cursor-pointer flex items-center space-x-2 text-[#E52226] hover:text-[#b71c1c] transition-colors"
                  >
                    <FaEnvelope className="cursor-pointer w-5 h-5" />
                    <span>Email</span>
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  );
};

export default LiveChat;