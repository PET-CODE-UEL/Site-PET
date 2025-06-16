import { Link, useLocation } from 'react-router-dom';
import './NavbarStyles.css';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Quem somos', path: '/quem-somos' },
    { name: 'Projetos', path: '/projetos' },
    { name: 'Ações', path: '/acoes' },
    { name: 'Eventos', path: '/eventos' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="w-full h-full py-6 flex items-center justify-center">
      <div className="w-[96%] mx-auto">
        <nav className="flex items-center justify-between h-full">
          {/* Logo with proper spacing */}
          <div className="py-2 logo-container">
            <Link to="/" className="block">
              <img src="/logo.svg" alt="PET CODE Logo" className="h-10" />
            </Link>
          </div>

          {/* Navigation Links */}
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
