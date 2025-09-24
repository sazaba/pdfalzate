export default function Footer() {
    return (
      <footer className="border-t border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Columna 1: Marca */}
          <div>
            <div className="h-8 w-8 rounded bg-gray-900" />
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Breve descripción o disclaimers legales.
            </p>
          </div>
  
          {/* Columna 2: Enlaces */}
          <div>
            <h4 className="font-semibold">Enlaces</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#whatyouget" className="hover:text-gray-900">Contenido</a></li>
              <li><a href="#bonuses" className="hover:text-gray-900">Bonos</a></li>
              <li><a href="#faq" className="hover:text-gray-900">FAQ</a></li>
            </ul>
          </div>
  
          {/* Columna 3: Legal */}
          <div>
            <h4 className="font-semibold">Legal</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-gray-900">Términos</a></li>
              <li><a href="#" className="hover:text-gray-900">Privacidad</a></li>
              <li><a href="#" className="hover:text-gray-900">Reembolsos</a></li>
            </ul>
          </div>
  
          {/* Columna 4: Contacto */}
          <div>
            <h4 className="font-semibold">Contacto</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li>email@dominio.com</li>
              <li>© {new Date().getFullYear()} Protagonist</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  