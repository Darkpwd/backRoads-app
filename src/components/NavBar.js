import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';
import { useState } from 'react';

const NavBar = () => {
  const [showLinks, setShowLinks] = useState(false);

  // Função para alternar o estado do menu
  const toggleLinks = () => {
    setShowLinks((prevState) => !prevState); // Inverte o estado atual
  };

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" onClick={toggleLinks}>
            <i className="fas fa-bars"></i>
          </button>
        </div>
        {/* Links de Navegação */}
        <ul className={`nav-links ${showLinks ? 'show-links' : ''}`}>
          {pageLinks.map((link) => {
            return (
              <li key={link.id}>
                <a href={link.href} className="nav-link">
                  {link.text}
                </a>
              </li>
            );
          })}
        </ul>
        {/* Ícones Sociais */}
        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, href, icon } = link;
            return (
              <li key={id}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
