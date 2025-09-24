export default function Testimonials() {
    const items = [
      {
        quote: "Testimonio breve de ejemplo (reemplazar).",
        author: "Nombre",
        role: "Profesión",
      },
      {
        quote: "Otro testimonio breve (reemplazar).",
        author: "Nombre",
        role: "Profesión",
      },
      {
        quote: "Otro más (reemplazar).",
        author: "Nombre",
        role: "Profesión",
      },
    ];
  
    return (
      <section id="testimonials" className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Testimonios
            </h2>
            <p className="mt-3 text-gray-600">
              Sustituye por citas reales y fotos si aplica.
            </p>
          </div>
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t, i) => (
              <figure
                key={i}
                className="rounded-2xl border border-gray-200 p-6"
              >
                <blockquote className="text-gray-800">“{t.quote}”</blockquote>
                <figcaption className="mt-4 text-sm text-gray-600">
                  <div className="font-semibold text-gray-900">{t.author}</div>
                  <div>{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    );
  }
  