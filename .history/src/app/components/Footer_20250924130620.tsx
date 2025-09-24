import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Columna 1: Marca */}
        <div>
          <Image
            src="/rclogo.png"
            alt="RC Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <p className="mt-4 text-sm text-gray-600 max-w-xs">
            Cookbook 3.0 es tu guía práctica de cocina: recetas rápidas,
            saludables y deliciosas al alcance de todos. Descubre cómo organizar
            tus menús y disfrutar la cocina cada día.
          </p>
        </div>

        {/* Columna 2: Enlaces */}
        <div>
          <h4 className="font-semibold">Enlaces</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>
              <a href="#whatyouget" className="hover:text-gray-900">
                Contenido
              </a>
            </li>
            <li>
              <a href="#bonuses" className="hover:text-gray-900">
                Bonos
              </a>
            </li>
            <li>
              <a href="#faq" className="hover:text-gray-900">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Legal */}
        <div>
          <h4 className="font-semibold">Legal</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>
              <a href="#" className="hover:text-gray-900">
                Términos y Condiciones
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Política de Privacidad
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-900">
                Política de Reembolsos
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 4: Contacto */}
        <div>
          <h4 className="font-semibold">Contacto</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-600">
            <li>
              <a
                href="mailto:soporte@rcserviciosgenerales.online"
                className="hover:text-gray-900"
              >
                soporte@rcserviciosgenerales.online
              </a>
            </li>
            <li>
              © {new Date().getFullYear()} RC Servicios Generales · Todos los
              derechos reservados
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
