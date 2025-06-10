import React from 'react';
import './Hero.css';


export default function Hero() {
  return (
    <div className="hero">
      <p className="descripcion-tienda">
        ¡Encuentra los mejores accesorios para tu laptop, PC o para tu comodidad en el fútbol!<br />
        Calidad, variedad y precios accesibles para los amantes de la tecnología y el deporte.<br />
      </p>

      <a
        href="https://wa.me/4272259083?text=Hola,%20quiero%20más%20información%20sobre%20accesorios%20de%20PC"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wsp"
      >
        Solicitar Información
      </a>
    </div>
  );


}


