import './Contacto.css';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section id="contacto" className="contacto-section">
      <h2>Contáctanos</h2>
      <p>¡Envíanos un mensaje directo!</p>

      <div className="redes-sociales">
        <a
          href="https://wa.me/524272259083?text=Hola%2C%20necesito%20informaci%C3%B3n%20acerca%20de%20un%20producto%20de%20tu%20tienda%2C%20%C2%BFPuedes%20ayudarme%3F"
          target="_blank"
          rel="noopener noreferrer"
          className="icono whatsapp"
        >
          <FaWhatsapp />
        </a>

        <a href="https://www.facebook.com/https://www.facebook.com/leonardo.chavero.522?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="icono facebook">
          <FaFacebookF />
        </a>
      </div>
    </section>
  );
}
