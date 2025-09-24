"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from '../images/rclogo.png'

const navItems = [
  { href: "#whatyouget", label: "Contenido" },
  { href: "#bonuses", label: "Bonos" },
  { href: "#testimonials", label: "Testimonios" },
  { href: "#faq", label: "FAQ" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/90 backdrop-blur border-b border-gray-200"
          : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-3">
          {/* Logo real */}
          <Image
            src={logo}
            alt="RC Logo"
            width={32}
            height={32}
            className="rounded"
          />
          <span className="font-semibold tracking-tight">
            RC Servicios Generales
          </span>
        </Link>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((i) => (
            <a
              key={i.href}
              href={i.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              {i.label}
            </a>
          ))}
          <a
            href="#cta"
            className="inline-flex items-center rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:opacity-90"
          >
            Comprar ahora
          </a>
        </nav>

        {/* Botón hamburguesa */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center p-2"
        >
          <span className="sr-only">Abrir menú</span>
          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="space-y-2 px-4 py-4">
            {navItems.map((i) => (
              <a
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="block rounded px-2 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                {i.label}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="block rounded bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white"
            >
              Comprar ahora
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
