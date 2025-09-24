export default function CTA() {
    return (
      <section id="cta" className="py-16 sm:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Listo para unirte
          </h2>
          <p className="mt-3 text-gray-600">
            Reemplaza por el mensaje comercial final del landing.
          </p>
  
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center rounded-2xl border border-gray-200 p-6 shadow-sm gap-4 sm:gap-6">
            <div className="text-left">
              <div className="text-2xl font-bold">US$ XXX</div>
              <div className="text-sm text-gray-600">Pago único / plan</div>
            </div>
  
            <a
              href="#"
              className="inline-flex items-center rounded-xl bg-gray-900 px-6 py-3 font-semibold text-white hover:opacity-90"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      </section>
    );
  }
  