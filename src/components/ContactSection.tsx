'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTiktok, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

const ContactSection = () => {
  // Move the EmailJS initialization inside the component
  useEffect(() => {
    emailjs.init("9y8F0OLJFHYbMn1gn");
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    subject: 'Consulta General'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError('');
    
    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.phone || !formData.message) {
        throw new Error('Por favor complete todos los campos requeridos');
      }
      
      // Send email using EmailJS
      const result = await emailjs.send(
        'service_dly664k',
        'template_6mo63sa',
        {
          name: formData.name,           // Changed from from_name to name to match template
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        '9y8F0OLJFHYbMn1gn'
      );
      
      if (result.status !== 200) {
        throw new Error('Error al enviar el mensaje');
      }
      
      // Reset form and show success modal
      setIsModalOpen(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        subject: 'Consulta General'
      });
    } catch (error) {
      setFormError(error instanceof Error ? error.message : 'Error al enviar el mensaje');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaPhone className="w-6 h-6" />,
      title: "Teléfono",
      value: "976 687 566",
      link: "https://wa.me/51976786987/"
    },
    {
      icon: <FaEnvelope className="w-6 h-6" />,
      title: "Email",
      value: "elizabethcompanyeirl@gmail.com",
      link: "mailto:elizabethcompanyeirl@gmail.com"
    },
    {
      icon: <FaMapMarkerAlt className="w-6 h-6" />,
      title: "Dirección",
      value: "Av. Alfonso Ugarte N° 1630 - Cercado de Chiclayo, Perú",
      link: "https://maps.google.com/?q=Av.+Alfonso+Ugarte+N°+1630+-+Cercado+de+Chiclayo,+Perú"
    }
  ];

  const socialMedia = [
    {
      icon: <FaFacebook className="w-6 h-6" />,
      name: "Facebook",
      link: "https://www.facebook.com/ElizabethCompanyEIRL/"
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      name: "Instagram",
      link: "https://www.instagram.com/eli.zabethcompany/"
    },
    {
      icon: <FaTiktok className="w-6 h-6" />,
      name: "TikTok",
      link: "https://www.tiktok.com/@elizabethcompanyirl"
    },
    {
      icon: <FaYoutube className="w-6 h-6" />,
      name: "Youtube",
      link: "https://www.youtube.com/channel/UC8-WiGsjXTG1uG-I-vry74g"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#fff] via-[#f7fafc] to-[#fbe9e7] relative overflow-x-clip">
      {/* Fondo decorativo rojo difuminado */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#E52226]/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#E52226]/10 rounded-full blur-2xl z-0" style={{transform: 'translateY(-50%)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#E52226] text-sm font-semibold mb-3 px-4 py-1 rounded-full bg-[#E52226]/10">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            ¿Cómo podemos ayudarte?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Estamos aquí para responder tus preguntas y brindarte la mejor asesoría en seguridad industrial.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-[#E52226] group-hover:text-[#E52226] transition-colors">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-[#255270] mb-1">{item.title}</h3>
                  <p className="text-gray-600">{item.value}</p>
                </div>
              </motion.a>
            ))}

            {/* Redes Sociales */}
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="font-semibold text-black mb-4">Síguenos en</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-orange-500/10 transition-colors group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-black group-hover:text-[#E52226] transition-colors">
                      {social.icon}
                    </div>
                    <span className="text-sm text-gray-600 group-hover:text-[#E52226]">
                      {social.name}
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Formulario de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Asunto
                </label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="cursor-pointer w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                >
                  <option value="Consulta General">Consulta General</option>
                  <option value="Cotización">Cotización</option>
                  <option value="Compras por mayoreo">Compras por mayoreo</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent text-gray-900"
                  required
                />
              </div>

              {formError && (
                <div className="text-red-500 text-sm mt-2 mb-4">
                  {formError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`cursor-pointer w-full bg-[#E52226] text-white px-6 py-3 rounded-lg hover:bg-[#E52226] hover:scale-105 duration-300 transition-all text-lg font-medium ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </span>
                ) : (
                  'Enviar Mensaje'
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Modal de Confirmación */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white p-8 rounded-2xl max-w-md w-full mx-4 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              >
                <IoClose className="cursor-pointer w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-green-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#255270] mb-2">
                  ¡Mensaje Enviado!
                </h3>
                <p className="text-gray-600 mb-6">
                  Hemos recibido tu mensaje. Nos pondremos en contacto contigo lo antes posible.
                </p>
                <button
                  onClick={() => {
                    setIsModalOpen(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      message: '',
                      subject: 'Consulta General'
                    });
                  }}
                  className="bg-[#E52226] cursor-pointer text-white px-6 py-2 rounded-lg hover:bg-[#E52226] transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;