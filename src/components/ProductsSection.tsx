'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaTag, FaArrowRight, FaTools } from 'react-icons/fa';
import audio from '@/app/assets/categorias/audio.jpg';
import cabeza from '@/app/assets/categorias/cabeza.jpg';
import facial from '@/app/assets/categorias/facial.jpg';
import manos from '@/app/assets/categorias/manos.jpg';
import respiracion from '@/app/assets/categorias/respiratorio.jpg';
import pies from '@/app/assets/categorias/pies.jpg';
import comba from '@/app/assets/productos/comba.jpeg';
import carretilla from '@/app/assets/productos/carretilla.jpeg';
import pala from '@/app/assets/productos/pala.jpeg';
import pico from '@/app/assets/productos/pico.jpeg';
import serrucho from '@/app/assets/productos/serrucho.jpeg';
import banner from '@/app/assets/banner/banner.png';
import { useState, useEffect } from 'react';

const categories = [
  { name: 'Protección para la Cabeza', icon: cabeza, count: 120 },
  { name: 'Protección para los Oídos', icon: audio, count: 80 },
  { name: 'Protección para la Respiración', icon: respiracion, count: 150 },
  { name: 'Protección para las Manos', icon: manos, count: 200 },
  { name: 'Protección para los Pies', icon: pies, count: 100 },
  { name: 'Protección para la Visión', icon: facial, count: 70 },
];

const featuredProducts = [
  {
    id: 1,
    name: 'Carretilla Metálica',
    price: 'Precio cotizable',
    oldPrice: '230.90',
    offer: 'Oferta',
    rating: 4.5,
    image: carretilla,
    additionalImages: [carretilla],
    category: 'Herramientas',
    description: 'Robusta y confiable, la Carretilla Metálica Bellota está diseñada para facilitar el transporte de materiales pesados en agricultura, construcción y trabajos industriales. Su llanta antipinchazo y estructura reforzada aseguran resistencia y durabilidad en todo tipo de terreno.',
    features: ['Llanta antipinchazo', 'Chasis de madera', 'Estructura reforzada'],
    stock: 70,
    specs: {
      Marca: 'Bellota',
      Color: 'Rojo',
    }
  },
  {
    id: 2,
    name: 'Pala Carbonera ',
    price: 'Precio cotizable',
    oldPrice: '125.90',
    rating: 4.2,
    image: pala,
    category: 'Herramientas',
    description: 'Ideal para trabajos de carga y manipulación de carbón u otros materiales sólidos, esta pala cuenta con una hoja de acero al carbono de alta resistencia, mango de madera ergonómico y collar reforzado para una mayor vida útil y seguridad durante el uso.',
    features: ['Mango de madera', 'Collar reforzado', 'Diseño ergonómico'],
    stock: 150,
    specs: {
      Material: 'Acero al carbono',
      Color: 'Negro',
      Marca: 'Truper',
    },
  },
  {
    id: 3,
    name: 'Comba Octagonal 16 lbs',
    price: 'Precio cotizable',
    oldPrice: '200.90',
    rating: 4.7,
    image: comba,
    category: 'Herramientas',
    description: 'Herramienta indispensable para tareas de demolición o golpeo intenso. La Comba Truper ofrece una cabeza octagonal forjada con precisión y un mango de fibra de vidrio con grip antiderrapante, lo que garantiza máxima seguridad, confort y control en cada impacto.',
    features: ['Grip antiderrapante', 'Absorción de impactos', 'Alta durabilidad'],
    stock: 100,
    specs: {
      Material: 'Acero',
      Mango: 'Fibra de vidrio',
      Marca: 'Truper',
      Color: 'Anaranjado y negro',
    }
  },
  {
    id: 4,
    name: 'Pico 5 lbs con Mango 36”',
    price: 'Precio cotizable',
    oldPrice: '70.90',
    offer: 'Oferta',
    rating: 4.8,
    image: pico,
    category: 'Herramientas',
    description: 'Perfecto para romper suelos duros, cavar zanjas o remover raíces, este pico combina una cabeza de acero al carbono de alta resistencia con un mango ergonómico cubierto de polipropileno, que proporciona un agarre firme y comodidad incluso en las tareas más exigentes.',
    features: ['Alta resistencia', 'Mango antideslizante', 'Ideal para suelos duros', 'Mango ergonómico'],
    stock: 100,
    specs: {
      Material: 'Acero al carbono',
      Marca: 'Truper',
      Color: 'Negro y anaranjado',
    }
  },
  {
    id: 5,
    name: 'Serrucho Profesional 24”',
    price: 'Precio cotizable',
    oldPrice: '20.90',
    discount: '0',
    rating: 4.6,
    image: serrucho,
    category: 'Herramientas',
    description: 'El Serrucho Profesional Stanley de 24" está diseñado para cortes precisos y limpios en madera. Su hoja afilada y duradera, junto con su mango ergonómico, lo convierten en una herramienta esencial para carpinteros y entusiastas del bricolaje que buscan rendimiento y precisión.',
    features: ['Cortes precisos', 'Diseño ergonómico', 'Alta durabilidad'],
    stock: 90,
    specs: {
      Marca: 'Stanley',
      Color: 'Gris oscuro con detalles grises claros',
    }
  }
];



const ProductsSection = () => {
  const [selectedProduct, setSelectedProduct] = useState<typeof featuredProducts[0] | null>(null);
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  //Resetear la imagen activa cuando se abre/cierra el modal
  useEffect(() => {
    setActiveImageIdx(0);
  }, [selectedProduct]);

  return (
    <section className="py-24 bg-gradient-to-b from-[#f7fafc] via-[#fff] to-[#ffeaea] relative overflow-x-clip">
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-[#F44336]/10 rounded-full blur-3xl z-0" />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] bg-[#E52226]/10 rounded-full blur-2xl z-0" style={{transform: 'translateY(-50%)'}} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center md:text-left max-w-2xl"
          >
            <h2 className="text-4xl font-bold text-[#222] mb-4">Nuestros Productos</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Soluciones integrales en seguridad industrial con los más altos estándares de calidad y certificaciones internacionales
            </p>
          </motion.div>
          
          {/*
          <div className="relative w-full md:w-auto">
            <div className="relative w-full md:w-80 group">
              <input 
                disabled
                type="text"
                placeholder="Buscar productos..."
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:ring-2 focus:ring-orange-500 focus:outline-none cursor-not-allowed bg-white/50 backdrop-blur-sm"
              />
              <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg" />
              <div className="invisible group-hover:visible absolute z-10 w-72 px-4 py-3 -left-0 top-15 bg-white rounded-xl shadow-xl border border-gray-100">
                <h3 className="font-semibold text-[#255270] mb-2">Elizabeth Company | Tienda</h3>
                <p className="text-sm text-gray-600">Dirigase a la tienda para ver todos los productos</p>
              </div>
            </div>
          </div>
          */}
        </div>

        {/* Categorías */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/60 backdrop-blur-xl p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer text-center group hover:-translate-y-2 border border-white/40"
            >
              <div className="relative w-16 h-16 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300 bg-[#F44336]/10 rounded-full flex items-center justify-center">
                <Image 
                src={category.icon}
                alt={category.name} 
                fill  
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                className="object-contain rounded-full "  
                />
              </div>
              <h3 className="font-semibold text-[#222] text-base group-hover:text-[#F44336] transition-colors">{category.name}</h3>
              <p className="text-xs text-gray-500">+ {category.count} productos</p>
            </motion.div>
          ))}
        </div>

        {/* Productos Destacados */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Banner en lugar de producto destaco - banner oculto en telefonos moviles o pantallas pequeñas */}
          <div className="hidden md:flex lg:col-span-8 row-span-2 shadow-lg rounded-3xl overflow-hidden relative items-center justify-center" style={{ minHeight: '900px' }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative w-full h-full"
            >
              <Image
                src={banner}
                alt="Promoción Especial"
                width={1000}
                height={600}
                className="object-cover "
                priority
              />
            </motion.div>
          </div>

          {/* Renderizar los productos destacados */}
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="lg:col-span-4 bg-white/70 backdrop-blur-xl rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/40 flex flex-col"
              style={{ minHeight: '320px' }}
            >
              {/* Imagen */}
              <div className="flex justify-center items-center pt-8">
                <div className="relative w-40 h-40 md:w-48 md:h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className="object-cover rounded-full border-4 border-[#F44336] group-hover:scale-105 transition-transform duration-700 shadow-lg"
                  />
                  {product.offer && (
                    <div className="absolute -top-6 -right-22 bg-[#F44336] text-white px-4 py-2 rounded-xl font-bold shadow-lg flex items-center gap-2 text-xs animate-pulse">
                      <FaTag className="w-4 h-4" />
                      {product.offer}
                    </div>
                  )}
                </div>
              </div>
              {/* Contenido */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <FaTools className="text-[#F44336] w-5 h-5" />
                  <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                    {product.category}
                  </p>
                </div>
                <h3 className="font-bold text-[#222] text-xl mb-3 group-hover:text-[#F44336] transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.features.map((feature, i) => (
                    <span key={i} className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                      {feature}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400 text-sm">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">({product.rating})</span>
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <div>
                    <p className="text-base font-bold text-[#222]">{product.price}</p>
                    {product.oldPrice && (
                      <p className="text-sm text-gray-400 line-through">{product.oldPrice}</p>
                    )}
                  </div>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="cursor-pointer bg-[#F44336] text-white px-6 py-2.5 rounded-xl hover:bg-[#e53935] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg font-bold flex items-center gap-2"
                  >
                    Ver detalles <FaArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link
            href="https://wa.me/51976786987?text=Hola vengo de la pagina web, queria ver todo su catalogo de productos, gracias"
            target="_blank"
            className="inline-flex items-center gap-3 bg-[#F44336] text-white text-lg px-8 py-4 rounded-xl hover:bg-[#e53935] transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl font-bold"
          >
            Ver catálogo completo
            <FaArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
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

      {/* Modal de producto */}
      {selectedProduct && (
        <div className="fixed inset-0 backdrop-blur-sm bg-black/50 z-50 flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] flex flex-col transform transition-all duration-300 scale-95 ">
            {/* Header con gradiente */}
            <div className="px-8 py-5 bg-gradient-to-r from-[#F44336] to-[#F44336] flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white tracking-tight">
                {selectedProduct.name}
              </h2>
              <button
                onClick={() => setSelectedProduct(null)}
                className="text-white/80 hover:text-white transition-colors duration-200 ease-in-out cursor-pointer p-1 rounded-full hover:bg-white/10"
                aria-label="Cerrar modal"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Contenido principal */}
            <div className="p-8 flex-grow overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Sección de imagen con galería */}
                <div className=" relative group flex flex-col items-center">
                  <div className="cursor-pointer aspect-square rounded-xl overflow-hidden bg-gray-50 border-2 border-gray-100 flex items-center justify-center shadow-inner w-full">
                    <Image
                      src={
                        [selectedProduct.image, ...(selectedProduct.additionalImages || [])][activeImageIdx]
                      }
                      alt={selectedProduct.name}
                      width={600}
                      height={600}
                      className="cursor-pointer object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  {/* Miniaturas */}
                  <div className="flex gap-3 mt-4 flex-wrap justify-center">
                    {([selectedProduct.image, ...(selectedProduct.additionalImages || [])]).map((img, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveImageIdx(i)}
                        className={`w-16 h-16 rounded-md border-2 overflow-hidden transition-colors ${activeImageIdx === i ? 'border-[#F44336]' : 'border-gray-200'} focus:outline-none`}
                        tabIndex={0}
                        aria-label={`Ver imagen ${i + 1}`}
                      >
                        <Image
                          src={img}
                          alt={`Vista ${i + 1}`}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Información del producto */}
                <div className="space-y-6">
                  {/* Precio y rating */}
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="text-3xl font-extrabold text-gray-900">
                        {selectedProduct.price}
                      </div>
                      {selectedProduct.discount && (
                        <span className="inline-block mt-1 px-2 py-1 text-xs font-bold bg-green-100 text-green-800 rounded-full">
                          {selectedProduct.discount}% OFF
                        </span>
                      )}
                    </div>
                    
                    <div className="flex items-center">
                      <div className="flex text-amber-400 text-xl">
                        {[...Array(5)].map((_, i) => (
                          <span key={i}>{i < Math.floor(selectedProduct.rating) ? '★' : '☆'}</span>
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-gray-500">({selectedProduct.rating})</span>
                    </div>
                  </div>

                  {/* Categoría y disponibilidad */}
                  <div className="flex flex-wrap gap-4">
                    <div>
                      <span className="block text-xs font-semibold text-gray-500 uppercase">Categoría</span>
                      <span className="text-sm font-medium text-indigo-600">{selectedProduct.category}</span>
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-500 uppercase">Disponibilidad</span>
                      <span className="text-sm font-medium text-green-600">En stock</span>
                    </div>
                  </div>

                  {/* Descripción */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Descripción</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedProduct.description}</p>
                  </div>

                  {/* Características */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Características principales</h3>
                    <ul className="space-y-2">
                      {selectedProduct.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Especificaciones técnicas */}
                  {selectedProduct.specs && (
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">Especificaciones técnicas</h3>
                      <div className="grid grid-cols-2 gap-3 text-sm">
                        {Object.entries(selectedProduct.specs).map(([key, value]) => (
                          <div key={key} className="bg-gray-50 px-3 py-2 rounded-lg">
                            <span className="block text-xs text-gray-500 font-medium">{key}</span>
                            <span className="text-gray-800">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Acciones */}
                <div className="px-8 py-5 border-t border-gray-200 bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Envíos a todo el Perú
                  </div>
                  
                  <div className="flex gap-3 w-full sm:w-auto">
                    {/*
                    <button className="flex-1 sm:flex-none px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                      Guardar
                    </button>
                    */}
                    <a 
                      href={`https://wa.me/51976786987?text=Hola, estoy interesado en el producto: ${selectedProduct.name} - Precio: ${selectedProduct.price}`} 
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="cursor-pointer bg-white text-center w-48 rounded-2xl h-14 relative text-gray-600 text-xl font-semibold group"
                        type="button"
                      >
                        <div
                          className="cursor-pointer bg-[#E52226] rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-600"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1024 1024"
                            height="25px"
                            width="25px"
                            className="rotate-180"
                          >
                            <path
                              d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
                              fill="#ffffff"
                            ></path>
                            <path
                              d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
                              fill="#ffffff"
                            ></path>
                          </svg>
                        </div>
                        <p className="cursor-pointer translate-x-2">Comprar </p>
                      </button>
                    </a>
                  </div>
                </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductsSection;
