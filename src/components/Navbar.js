import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaUser, FaGitlab, FaGraduationCap } from 'react-icons/fa'; // Ícones

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Estado do menu

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Alterna entre aberto e fechado
  };

  return (
    <nav className="barra-navegacao">
      <div className="menu-toggle" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />} {/* Ícones dinâmicos */}
        <span className="menu-label">MENU</span> {/* Nome do menu */}
      </div>
      <ul className={`menu ${menuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/">
            <FaHome /> Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FaUser /> Sobre
          </Link>
        </li>
        <li>
          <Link to="/gitlab">
            <FaGitlab /> GitLab
          </Link>
        </li>
        <li>
          <Link to="/education">
            <FaGraduationCap /> Educação
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
