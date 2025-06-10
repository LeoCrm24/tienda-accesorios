import React, { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  return (
    <nav className="navbar">
      <div className="navbar-title">Fútbol y Tecnología</div>

      <div className={`navbar-links ${menuAbierto ? 'activo' : ''}`}>
        <a href="#productos" onClick={() => setMenuAbierto(false)}>Productos</a>
        <a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
      </div>

      <div className={`hamburguesa ${menuAbierto ? 'activo' : ''}`} onClick={toggleMenu}>
        <div className="barra"></div>
        <div className="barra"></div>
        <div className="barra"></div>
      </div>
    </nav>
  );
}
