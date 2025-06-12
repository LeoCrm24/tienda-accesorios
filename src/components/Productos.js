import { useEffect, useState } from "react";
import './Productos.css';

export default function Productos() {
  const telefono = "524272259083";
  const [productos, setProductos] = useState([]);
  const [seccion, setSeccion] = useState("pc");
  const [animando, setAnimando] = useState(false);
  const [imagenSeleccionada, setImagenSeleccionada] = useState(null);

  useEffect(() => {
    setAnimando(true);
    const archivo = seccion === "pc" ? "/productos.json" : "/productosFutbol.json";
    setTimeout(() => {
      fetch(archivo)
        .then(res => res.json())
        .then(data => {
          setProductos(data);
          setAnimando(false);
        });
    }, 300);
  }, [seccion]);

  return (
    <section id="productos" className="productos-section">
      <h2>Selecciona una categoría</h2>
      <div className="selector-categorias">
        <div
          className={`categoria-card ${seccion === "pc" ? "activo" : ""}`}
          onClick={() => setSeccion("pc")}
        >
          <img src="https://img.icons8.com/ios-filled/100/laptop.png" alt="PC" />
          <h3>Accesorios PC</h3>
        </div>
        <div
          className={`categoria-card ${seccion === "futbol" ? "activo" : ""}`}
          onClick={() => setSeccion("futbol")}
        >
          <img src="/img/soccer.webp" alt="Fútbol" />
          <h3>Accesorios Fútbol</h3>
        </div>
      </div>

      <h2>{seccion === "pc" ? "Productos de PC y Electrónicos" : "Productos de Fútbol"}</h2>

      <div className={`productos-grid ${animando ? "fade" : ""}`}>
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <img
              src={producto.imagen}
              alt={producto.nombre}
              onClick={() => setImagenSeleccionada(producto.imagen)}
              className="clickable-img"
            />
            <h3>{producto.nombre}</h3>
            <p className="precio">{producto.precio}</p>
            
            <a
              className="btn-wsp"
              href={`https://wa.me/${telefono}?text=Hola%2C%20estoy%20interesado%20en%20el%20producto:%20${encodeURIComponent(producto.nombre)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar información
            </a>
          </div>
        ))}
      </div>

      {imagenSeleccionada && (
        <div className="modal-overlay" onClick={() => setImagenSeleccionada(null)}>
          <div className="modal-content">
            <img src={imagenSeleccionada} alt="Vista ampliada" />
          </div>
        </div>
      )}
    </section>
  );
}
