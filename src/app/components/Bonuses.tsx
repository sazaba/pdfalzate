export default function Bonuses() {
    const bonuses = [
      { title: "Bono 1", desc: "Descripción breve del bono.", value: "US$xx" },
      { title: "Bono 2", desc: "Descripción breve del bono.", value: "US$xx" },
      { title: "Bono 3", desc: "Descripción breve del bono.", value: "US$xx" },
      { title: "Bono 4", desc: "Descripción breve del bono.", value: "US$xx" },
    ];
  
    return (
      <section id="bonuses" className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Bonos incluidos
            </h2>
            <p className="mt-3 text-gray-600">
              Sustituye por el detalle exacto de cada bonus.
            </p>
          </div>
  
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {bonuses.map((b, i) => (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 bg-white p-6"
              >
                <div className="aspect-video w-full rounded-lg bg-gray-100 mb-4" />
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
  