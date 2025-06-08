import { NavLink } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Navbar() {
  // Estilo base para os links da navbar, com transição suave.
  const linkStyle =
    "text-black hover:opacity-70 transition-opacity duration-300";

  // Estilos aplicados ao link da página ativa.
  const activeLinkStyle = {
    opacity: 0.5,
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo que leva para a Home Page */}
        <NavLink to="/">
          <img src={logo} className="h-8" alt="Logo PET-CODE" />
        </NavLink>

        {/* Itens de Navegação */}
        <div className="flex items-center space-x-8 font-sans font-bold">
          <NavLink
            to="/quem-somos"
            className={linkStyle}
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Quem somos
          </NavLink>
          <NavLink
            to="/projetos"
            className={linkStyle}
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Projetos
          </NavLink>
          <NavLink
            to="/acoes"
            className={linkStyle}
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Ações
          </NavLink>
          <NavLink
            to="/eventos"
            className={linkStyle}
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Eventos
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
