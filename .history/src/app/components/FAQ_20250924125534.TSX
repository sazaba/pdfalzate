"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FAQItem = { q: string; a: string };

const faqs: FAQItem[] = [
  {
    q: "¿Qué incluye exactamente el Cookbook 3.0?",
    a: "El ebook contiene más de 150 recetas exclusivas, guías de cocina saludable, listas de compras semanales y tips profesionales de chefs para que cocines fácil y sin complicaciones.",
  },
  {
    q: "¿En qué formato recibo el libro?",
    a: "El libro se entrega en formato PDF descargable, optimizado para verse en tu celular, tablet o computadora. Tendrás acceso inmediato después de tu compra.",
  },
  {
    q: "¿Necesito experiencia previa en cocina?",
    a: "¡No! El Cookbook 3.0 está diseñado tanto para principiantes como para cocineros intermedios. Cada receta tiene instrucciones paso a paso.",
  },
  {
    q: "¿Puedo acceder desde cualquier país?",
    a: "Sí, la compra es 100% online y el acceso al ebook es inmediato sin importar dónde te encuentres.",
  },
  {
    q: "¿Qué pasa si no me gusta el contenido?",
    a: "No hay riesgo. Tienes 7 días de garantía de reembolso completo si el libro no cumple tus expectativas.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
          Preguntas frecuentes
        </h2>

        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i}>
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between"
                >
                  <span className="font-medium">{item.q}</span>
                  <svg
                    className={`h-5 w-5 transition-transform ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-600">{item.a}</div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
