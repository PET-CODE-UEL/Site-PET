import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";

import Home from "./pages/HomePage";
import QuemSomos from "./pages/QuemSomosPage";
import Projetos from "./pages/ProjetosPage";
import Acoes from "./pages/AcoesPage";
import Eventos from "./pages/EventosPage";

export default function App() {
  return (
    <Router>
      <div className="h-screen bg-gray-50 font-mono flex flex-col overflow-hidden">
        {/* Header area with navbar */}
        <div className="navbar-container flex-shrink-0" style={{ height: '13vh' }}>
          <div className="navbar-inner h-full">
            <Navbar />
          </div>
        </div>
        
        {/* Main content taking remaining space */}
        <div className="flex-grow overflow-hidden" style={{ height: '87vh' }}>
          <Routes>
            <Route path="/"           element={<Layout><Home /></Layout>} />
            <Route path="/quem-somos" element={<Layout><QuemSomos /></Layout>} />
            <Route path="/projetos"   element={<Layout><Projetos /></Layout>} />
            <Route path="/acoes"      element={<Layout><Acoes /></Layout>} />
            <Route path="/eventos"    element={<Layout><Eventos /></Layout>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

