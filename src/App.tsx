import "./App.css";
import Acoes from "./pages/Acoes/Acoes.tsx";
import Eventos from "./pages/Eventos/Eventos.tsx";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import Projetos from "./pages/Projetos/Projetos.tsx";
import QuemSomos from "./pages/QuemSomos/QuemSomos.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/acoes" element={<Acoes />} />
          <Route path="/eventos" element={<Eventos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
