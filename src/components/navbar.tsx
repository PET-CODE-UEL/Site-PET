import { NavLink } from "react-router-dom";
import logo from "@/assets/logo.svg";

export default function Navbar() {
  const linkStyle =
    "font-cascadia text-xl text-black transition-opacity duration-300 hover:opacity-60";

  return (
    <header className="h-[10vh] bg-white shadow-md">
      <nav className="container mx-auto flex h-full items-center justify-between px-16">
        <NavLink to="/">
           * O logo importado é usado aqui. Com a correção do alias,
          <img src={logo} className="h-9 w-auto" alt="Logo PET-CODE" />
        </NavLink>
        <div className="flex items-center space-x-16">
          <NavLink to="/quem-somos" className={linkStyle}>
            Quem somos
          </NavLink>
          <NavLink to="/projetos" className={linkStyle}>
            Projetos
          </NavLink>
          <NavLink to="/acoes" className={linkStyle}>
            Ações
          </NavLink>
          <NavLink to="/eventos" className={linkStyle}>
            Eventos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

