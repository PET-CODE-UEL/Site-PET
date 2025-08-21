import { Link } from "react-router-dom";
import LogoHorizontal from "../assets/logo_horizontal.svg";

export default function Navbar() {
  return (
    <nav className="flex justify-between pl-4 pr-20 color-black">
      {/* Logo à esquerda */}
      <div>
        <Link to="/">
          <img
            src={LogoHorizontal}
            alt="Vetor do rosto de um Quati, com os escritos 'PET CODE' ao lado e um subtítulo 'computação e design'"
            className="logo-horizontal"
          />
        </Link>
      </div>

      {/* Seções a direita da navbar */}
      <div className="flex gap-15 m-5">
        <div>
          <Link
            to="/quem-somos"
            className="text-slate-800 font-bold duration-700 hover:text-xl"
          >
            Quem somos
          </Link>
        </div>
        <div>
          <Link
            to="/projetos"
            className="text-slate-800 font-bold duration-700 hover:text-xl"
          >
            Projetos
          </Link>
        </div>
        <div>
          <Link
            to="/acoes"
            className="text-slate-800 font-bold duration-700 hover:text-xl"
          >
            Ações
          </Link>
        </div>
        <div>
          <Link
            to="/eventos"
            className="text-slate-800 font-bold duration-700 hover:text-xl"
          >
            Eventos
          </Link>
        </div>
      </div>
    </nav>
  );
}
