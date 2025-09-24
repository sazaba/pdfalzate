export default function WhatYouGet() {
    const items = [
      { title: "Módulo 1", desc: "Descripción placeholder del módulo." },
      { title: "Módulo 2", desc: "Descripción placeholder del módulo." },
      { title: "Plantillas", desc: "Plantillas y recursos descargables." },
      { title: "Comunidad", desc: "Acceso a comunidad/soporte." },
    ];
  
    return (
      <section id="whatyouget" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              ¿Qué obtienes?
            </h2>
            <p className="mt-3 text-gray-600">
              Reemplaza con el copy exacto del landing.
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
  