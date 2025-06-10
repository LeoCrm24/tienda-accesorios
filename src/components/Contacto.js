import './Contacto.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section id="contacto" className="contacto-section">
      <h2>Contáctanos</h2>
      <p>¡Envíanos un mensaje directo!</p>

      <div className="redes-sociales">
        <a href="https://wa.me/524272259083" target="_blank" rel="noopener noreferrer" className="icono whatsapp">
          <FaWhatsapp />
        </a>
        <a href="https://www.facebook.com/https://www.facebook.com/leonardo.chavero.522?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer" className="icono facebook">
          <FaFacebookF />
        </a>
      </div>
    </section>
  );
}
