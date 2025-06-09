import { NavLink } from "react-router-dom";

export default function Navbar() {
  const linkClasses =
    "font-principal text-lg text-black transition-transform duration-300 ease-in-out hover:scale-110";

  return (
    <header className="h-[10vh] bg-white shadow-md">
      <nav className="container mx-auto flex h-full items-center justify-between px-16">
        <NavLink to="/">
          <img src="/logo.svg" className="h-8 w-auto" alt="Logo PET-CODE" />
        </NavLink>

        <div className="flex items-center space-x-16">
          <NavLink to="/quem-somos" className={linkClasses}>
            Quem somos
          </NavLink>
          <NavLink to="/projetos" className={linkClasses}>
            Projetos
          </NavLink>
          <NavLink to="/acoes" className={linkClasses}>
            Ações
          </NavLink>
          <NavLink to="/eventos" className={linkClasses}>
            Eventos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
