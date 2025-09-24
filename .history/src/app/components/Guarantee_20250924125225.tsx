import { FaShieldAlt } from "react-icons/fa";

export default function Guarantee() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Icono premium de garantía */}
        <div className="mx-auto h-16 w-16 flex items-center justify-center rounded-full bg-gray-100 text-gray-900">
          <FaShieldAlt className="text-3xl" />
        </div>

        <h3 className="mt-6 text-2xl sm:text-3xl font-bold">
          Garantía de satisfacción
        </h3>

        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Estamos tan seguros de que <span className="font-semibold">Cookbook
          3.0</span> transformará tu experiencia en la cocina, que si no quedas
          satisfecho tienes <span className="font-semibold">7 días de garantía
          de reembolso</span> sin preguntas.  
          <br />
          Compra con confianza y comienza hoy mismo a cocinar recetas fáciles,
          saludables y deliciosas.
        </p>
      </div>
    </section>
  );
}
