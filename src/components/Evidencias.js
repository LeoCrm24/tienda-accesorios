// src/components/Evidencias.js
import React, { useState } from 'react';
import './Evidencias.css';

const trabajos = [
  {
    id: 1,
    titulo: 'Mantenimiento Interno de Laptop',
    descripcion: 'Limpieza interna, cambio de pasta térmica y optimización de rendimiento.',
    imagen: '/img/mantenimiento.jpg'
  },
  {
    id: 2,
    titulo: 'Cambio de Pantalla',
    descripcion: 'Reemplazo de pantalla dañada con piezas originales y garantía.',
    imagen: '/img/pantalla.jpg'
  },
  {
    id: 3,
    titulo: 'Instalación de Programas',
    descripcion: 'Instalación de software como Office, AutoCAD y herramientas de productividad.',
    imagen: '/img/software.jpg'
  }
];

function Evidencias() {
  const [imagenAmpliada, setImagenAmpliada] = useState(null);

  return (
    <section className="evidencias">
      <h2>📷 Evidencias de mi trabajo</h2>
      <p>Algunos ejemplos de los trabajos realizados con calidad y detalle.</p>
      
      <div className="galeria">
        {trabajos.map((trabajo) => (
          <div key={trabajo.id} className="tarjeta" onClick={() => setImagenAmpliada(trabajo.imagen)}>
            <img src={trabajo.imagen} alt={trabajo.titulo} />
            <div className="overlay">
              <h3>{trabajo.titulo}</h3>
              <p>{trabajo.descripcion}</p>
            </div>
          </div>
        ))}
      </div>

      {imagenAmpliada && (
        <div className="modal" onClick={() => setImagenAmpliada(null)}>
          <img src={imagenAmpliada} alt="Trabajo ampliado" />
        </div>
      )}
    </section>
  );
}

export default Evidencias;
