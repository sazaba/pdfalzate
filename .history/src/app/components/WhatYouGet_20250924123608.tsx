export default function WhatYouGet() {
  const items = [
    {
      title: "Recetas exclusivas",
      desc: "Más de 150 recetas fáciles y rápidas para desayunos, almuerzos, cenas y postres, con instrucciones paso a paso.",
    },
    {
      title: "Guías de cocina saludable",
      desc: "Secciones dedicadas a opciones vegetarianas, veganas y sin gluten, pensadas para cuidar tu salud sin perder sabor.",
    },
    {
      title: "Listas de compras",
      desc: "Organiza tu semana con listas de compras prácticas y menús semanales que ahorran tiempo y dinero.",
    },
    {
      title: "Tips de chef",
      desc: "Consejos profesionales para mejorar tus técnicas en la cocina: cortes, tiempos de cocción y trucos de presentación.",
    },
  ];

  return (
    <section id="whatyouget" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            ¿Qué obtienes con Cookbook 3.0?
          </h2>
          <p className="mt-3 text-gray-600">
            Todo lo que necesitas para convertir tu cocina en un espacio creativo, 
            organizado y lleno de sabor. Este ebook no es solo un recetario, 
            es tu guía práctica para comer mejor cada día.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition"
            >
              <div className="h-10 w-10 rounded-lg bg-gray-900 mb-4" />
              <h3 className="font-semibold">{it.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
