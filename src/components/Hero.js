import React from 'react';
import './Hero.css';


export default function Hero() {
  return (
    <div className="hero">
      <p className="descripcion-tienda">
        ¡Encuentra los accesorios aptos para tu equipo de computo o para tu comodidad en el fútbol!<br />
        Calidad, variedad y precios accesibles.<br />
        <br />
        Oh bien, si necesitas mantenimiento para tu ordenador, escribenos...
      </p>

      <a
        href="https://wa.me/4272259083?text=Hola,%20necesito%20soporte%20tecnico%20en%20mi%20ordenador"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-wsp"
      >
        Solicitar Información
      </a>
    </div>
  );


}


