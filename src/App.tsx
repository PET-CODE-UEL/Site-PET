import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Layout from "./components/Layout";
import AnimatedLayout from "./components/AnimatedLayout";
import "./components/PageTransitions.css";

import Home from "./pages/HomePage";
import QuemSomos from "./pages/QuemSomosPage";
import Projetos from "./pages/ProjetosPage";
import Acoes from "./pages/AcoesPage";
import Eventos from "./pages/EventosPage";

function AppContent() {
  const location = useLocation();
  
  // Define which pages should have orange background (development pages)
  const developmentPages = ['/', '/quem-somos', '/projetos', '/eventos'];
  const isDevPage = developmentPages.includes(location.pathname);
  
  return (
    <div className={`h-screen font-mono flex flex-col overflow-hidden bg-transition ${isDevPage ? 'bg-orange-400' : 'bg-gray-50'}`}>
      {/* Header area with navbar */}
      <div className="navbar-container flex-shrink-0" style={{ height: '13vh' }}>
        <div className="navbar-inner h-full">
          <Navbar />
        </div>
      </div>
      
      {/* Main content taking remaining space */}
      <div className="flex-grow overflow-hidden" style={{ height: '87vh' }}>
        <Routes>
          <Route path="/"           element={<Layout><AnimatedLayout animationType="slide" staggerChildren><Home /></AnimatedLayout></Layout>} />
          <Route path="/quem-somos" element={<Layout><AnimatedLayout animationType="slideLeft" staggerChildren><QuemSomos /></AnimatedLayout></Layout>} />
          <Route path="/projetos"   element={<Layout><AnimatedLayout animationType="scale" staggerChildren><Projetos /></AnimatedLayout></Layout>} />
          <Route path="/acoes"      element={<Layout><AnimatedLayout animationType="slideRight" staggerChildren><Acoes /></AnimatedLayout></Layout>} />
          <Route path="/eventos"    element={<Layout><AnimatedLayout animationType="fade" staggerChildren><Eventos /></AnimatedLayout></Layout>} />
        </Routes>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

