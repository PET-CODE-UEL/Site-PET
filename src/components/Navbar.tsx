import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home/Home";
import Projetos from "../pages/Projetos/Projetos.tsx";
import QuemSomos from "../pages/QuemSomos/QuemSomos.tsx";
import Acoes from "../pages/Acoes/Acoes.tsx";
import Eventos from "../pages/Eventos/Eventos.tsx";

export default function Navbar() {
  return (
    <BrowserRouter>
      {/* Navigation */}
      <nav>
        <Link to="/">Home</Link> | <Link to="/quem-somos">Quem Somos</Link> |{" "}
        <Link to="/projetos">Projetos</Link> | <Link to="/acoes">Ações</Link> |{" "}
        <Link to="/eventos">Eventos</Link>
      </nav>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quem-somos" element={<QuemSomos />} />
        <Route path="/projetos" element={<Projetos />} />
        <Route path="/acoes" element={<Acoes />} />
        <Route path="/eventos" element={<Eventos />} />
      </Routes>
    </BrowserRouter>
  );
}
