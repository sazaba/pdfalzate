export default function Testimonials() {
  const items = [
    {
      quote:
        "¡Increíble! Con Cookbook 3.0 por fin puedo variar mis comidas sin pasar horas en la cocina. Las recetas rápidas me han salvado entre semana.",
      author: "María López",
      role: "Diseñadora Gráfica",
    },
    {
      quote:
        "Siempre quise aprender recetas más saludables y este ebook me dio justo lo que necesitaba. Los menús vegetarianos son deliciosos y fáciles.",
      author: "Carlos Ramírez",
      role: "Entrenador Personal",
    },
    {
      quote:
        "Soy mamá de dos niños y organizar la comida era un caos. Las listas de compras y el planner imprimible hicieron todo mucho más sencillo.",
      author: "Andrea Torres",
      role: "Madre y Emprendedora",
    },
    {
      quote:
        "Me sorprendió la calidad de las recetas y los tips de chef. He mejorado mi técnica y hasta mis amigos notaron la diferencia en mis platos.",
      author: "Luis Herrera",
      role: "Estudiante de Gastronomía",
    },
    {
      quote:
        "Por el precio que tiene, es un recurso completísimo. Incluso los bonos extra como el recetario de smoothies han sido de gran ayuda.",
      author: "Paola Méndez",
      role: "Nutricionista",
    },
    {
      quote:
        "Lo compré por curiosidad y ahora lo uso a diario. Las recetas son prácticas, económicas y con ingredientes fáciles de conseguir.",
      author: "Javier Gómez",
      role: "Ingeniero de Software",
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
            Esto es lo que dicen quienes ya tienen su copia del Cookbook 3.0.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((t, i) => (
            <figure
              key={i}
              className="rounded-2xl border border-gray-200 p-6 hover:shadow-sm transition"
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
