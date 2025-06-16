import { Link, useLocation } from 'react-router-dom';
import './NavbarStyles.css';

// Barra de navegação principal do site
const Navbar = () => {
  const location = useLocation();

  // Menu de navegação do site
  const navItems = [
    { name: 'Quem somos', path: '/quem-somos' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Ações', path: '/acoes' },
    { name: 'Eventos', path: '/eventos' },
  ];

  // Verifica se a página atual está ativa
  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-full h-full py-6 flex items-center justify-center">
      <div className="w-[96%] mx-auto">
        <nav className="flex items-center justify-between h-full">
          {/* Logo do PET CODE */}
          <div className="py-2 logo-container">
            <Link to="/" className="block">
              <img src="/logo.svg" alt="PET CODE Logo" className="h-10" />
            </Link>
          </div>

          {/* Links de navegação */}
          <div className="flex items-center space-x-28 nav-group">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                data-text={item.name}
                className={`nav-item text-gray-700 hover:text-black ${
                  isActive(item.path) ? 'text-black' : ''
                }`}
              >
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
