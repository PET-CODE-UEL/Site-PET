import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoHorizontal from "../assets/logo_horizontal.svg";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Shared nav link styling
  const navLink =
    "text-black font-bold transition-all duration-300 hover:text-xl";

  return (
    <header className="sticky top-0 z-50 bg-[#ED701F]">
      <div className="flex justify-between items-center h-16 px-6 md:px-12">
        {/* Logo */}
        <Link to="/" onClick={(e) => e.preventDefault()}>
          <img
            src={LogoHorizontal}
            alt="Logo do PET Code"
            className="h-12"
          />
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex gap-12">
          <Link to="/" className={navLink} onClick={(e) => e.preventDefault()}>
            Quem somos
          </Link>
          <Link to="/" className={navLink} onClick={(e) => e.preventDefault()}>
            Projetos
          </Link>
          <Link to="/" className={navLink} onClick={(e) => e.preventDefault()}>
            Ações
          </Link>
          <Link to="/" className={navLink} onClick={(e) => e.preventDefault()}>
            Eventos
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col space-y-1"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
          <span className="w-6 h-0.5 bg-black" />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setOpen(false)}
          />

          {/* Mobile nav */}
          <nav className="fixed top-16 left-0 w-full bg-[#ED701F] p-6 flex flex-col items-end gap-6 z-50 shadow-md md:hidden">
            <Link
              to="/"
              className="text-black text-lg font-semibold hover:text-yellow-200"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
            >
              Quem somos
            </Link>
            <Link
              to="/"
              className="text-black text-lg font-semibold hover:text-yellow-200"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
            >
              Projetos
            </Link>
            <Link
              to="/"
              className="text-black text-lg font-semibold hover:text-yellow-200"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
            >
              Ações
            </Link>
            <Link
              to="/"
              className="text-black text-lg font-semibold hover:text-yellow-200"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
              }}
            >
              Eventos
            </Link>
          </nav>
        </>
      )}
    </header>
  );
}

