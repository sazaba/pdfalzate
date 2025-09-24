"use client";
import { useState } from "react";

// Tipos
type FAQItem = { q: string; a: string };

const faqs: FAQItem[] = [
  { q: "¿Pregunta frecuente 1?", a: "Respuesta placeholder. Reemplázala por la real." },
  { q: "¿Pregunta frecuente 2?", a: "Respuesta placeholder. Reemplázala por la real." },
  { q: "¿Pregunta frecuente 3?", a: "Respuesta placeholder. Reemplázala por la real." },
];

// Fila del acordeón (tipada)
type RowProps = {
  item: FAQItem;
  index: number;
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
};

function Row({ item, index, openIndex, setOpenIndex }: RowProps): JSX.Element {
  const isOpen = openIndex === index;

  return (
    <div>
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="w-full px-5 py-4 text-left flex items-center justify-between"
      >
        <span className="font-medium">{item.q}</span>
        <svg
          className={`h-5 w-5 transition ${isOpen ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen ? <div className="px-5 pb-5 text-gray-600">{item.a}</div> : null}
    </div>
  );
}

export default function FAQ(): JSX.Element {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-center">
          Preguntas frecuentes
        </h2>

        <div className="mt-10 divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white">
          {faqs.map((item, i) => (
            <Row
              key={i}
              item={item}
              index={i}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
