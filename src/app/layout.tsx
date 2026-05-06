import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Elizabeth Company | Equipos de Protección Personal",
  description:
    "Venta al por mayor de materiales de construccion, articulos de ferreteria, equipos y materiales de fontaneria y calefaccion. Compra los mejores equipos de protección personal (EPP) en Elizabeth Company. Casco, guantes, mascarillas, calzado de seguridad y más. Productos certificados para proteger tu vida laboral.",
  keywords: [
    "equipos de protección personal",
    "EPP",
    "seguridad industrial",
    "ropa de seguridad",
    "casco de seguridad",
    "guantes de protección",
    "mascarillas de seguridad",
    "calzado de seguridad",
    "materiales de construccion",
    "articulos de ferreteria",
    "equipos de fontaneria",
    "equipos de calefaccion",
    "protección laboral",
    "Elizabeth Company",
    "Elizabeth Company EPP",
    "Elizabeth Company EPP de alta calidad",
    "Elizabeth Company EPP de seguridad industrial",
    "Elizabeth Company EPP de seguridad laboral",
    "Elizabeth Company EPP de seguridad en el trabajo",
    "productos de seguridad en el trabajo",
    "equipos de protección personal",
    "equipos de protección personal certificados",
    "equipos de protección personal de alta calidad",
    "equipos de protección personal de seguridad industrial",
    "equipos de protección personal de seguridad laboral",
    "equipos de protección personal de seguridad en el trabajo",
    "Chiclayo Perú EPP",
    "Chiclayo Perú EPP de alta calidad",
    "Chiclayo Perú EPP de seguridad industrial",
    "Chiclayo Perú EPP de seguridad laboral",
  ],
  authors: [{ name: "Elizabeth Company", url: "https://elizabethcompanyeirl.vercel.app/" }],
  creator: "Elizabeth Company",
  publisher: "Elizabeth Company",
  openGraph: {
    title: "Elizabeth Company | Expertos en Protección Personal y Materiales de Construcción",
    description:
      "Distribuidores de confianza en equipos de protección personal certificados. Envíos a todo el Perú. Compra segura y rápida. Ademas de materiales de construccion, articulos de ferreteria, equipos y materiales de fontaneria y calefaccion.",
    url: "https://elizabethcompanyeirl.vercel.app/",
    siteName: "Elizabeth Company",
    images: [
      {
        url: "https://elizabethcompanyeirl.vercel.app/", // asegúrate de subir una imagen real - Logo de la empresa o imagen representativa
        width: 1200,  
        height: 630,
        alt: "Elizabeth Company - EPP de alta calidad",
      },
    ],
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elizabeth Company | EPP Certificado",
    description:
      "Especialistas en seguridad industrial. Encuentra todos los equipos de protección personal que necesitas en un solo lugar. Ademas de materiales de construccion, articulos de ferreteria, equipos y materiales de fontaneria y calefaccion.",
    images: ["https://elizabethcompanyeirl.vercel.app/"],
  },
  metadataBase: new URL("https://elizabethcompanyeirl.vercel.app/"),
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://elizabethcompanyeirl.vercel.app/",
    languages: {
      "es-PE": "https://elizabethcompanyeirl.vercel.app/",
    },
  },
  
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
  
}
