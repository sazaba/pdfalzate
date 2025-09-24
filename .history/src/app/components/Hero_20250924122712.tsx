import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-20 grid items-center gap-10 lg:grid-cols-2">
        {/* Texto */}
        <div className="space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
            <span>Nuevo</span>
            <span className="h-1 w-1 rounded-full bg-gray-400"></span>
            <span>Edición especial</span>
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
            RC COOKBOOK 3.0{" "}
            <span className="text-gray-500">(placeholder)</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-600">
            Subtítulo breve y poderoso para explicar el beneficio clave.
            Reemplaza este texto por el del landing.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-5 py-3 text-white font-semibold"
            >
              Obtener acceso
            </a>
            <a
              href="#whatyouget"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 font-semibold"
            >
              Ver lo que incluye
            </a>
          </div>

          {/* Bullets rápidos */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4 text-sm text-gray-700">
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gray-900" />
              Acceso inmediato
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gray-900" />
              Actualizaciones
            </li>
            <li className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-gray-900" />
              Garantía
            </li>
          </ul>
        </div>

        {/* Imagen/video */}
        <div className="relative aspect-[4/3] w-full rounded-2xl bg-gray-100 shadow-sm">
          {/* Reemplaza por tu imagen/video */}
          <Image alt="hero" src="" fill className="object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
}
