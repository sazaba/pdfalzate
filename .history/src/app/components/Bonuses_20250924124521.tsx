import { FaBlender, FaMugHot, FaLeaf, FaFilePdf } from "react-icons/fa";

export default function Bonuses() {
  const bonuses = [
    {
      title: "Recetario de Smoothies",
      desc: "15 recetas exclusivas de batidos energéticos y saludables para complementar tu día.",
      value: "US$9",
      icon: <FaBlender className="text-2xl text-gray-900" />,
    },
    {
      title: "Guía de Cafés y Tés",
      desc: "Descubre combinaciones y trucos para preparar cafés y tés como un barista en casa.",
      value: "US$7",
      icon: <FaMugHot className="text-2xl text-gray-900" />,
    },
    {
      title: "Mini Ebook Veggie",
      desc: "10 recetas vegetarianas fáciles y deliciosas, ideales para tus menús semanales.",
      value: "US$5",
      icon: <FaLeaf className="text-2xl text-gray-900" />,
    },
    {
      title: "Planner Imprimible",
      desc: "Un planificador semanal en PDF para organizar tus comidas y listas de compras.",
      value: "US$4",
      icon: <FaFilePdf className="text-2xl text-gray-900" />,
    },
  ];

  return (
    <section id="bonuses" className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Bonos incluidos
          </h2>
          <p className="mt-3 text-gray-600">
            Además del Cookbook 3.0, recibirás estos recursos extra para potenciar
            tu experiencia en la cocina.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {bonuses.map((b, i) => (
            <div
              key={i}
              className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-sm transition"
            >
              <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-gray-100 mb-4">
                {b.icon}
              </div>
              <h3 className="font-semibold">{b.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{b.desc}</p>
              <div className="mt-4 text-xs uppercase tracking-wide text-gray-500">
                Valor: {b.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
