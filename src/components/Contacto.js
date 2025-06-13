import './Contacto.css';
import { FaFacebookF, FaWhatsapp } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section id="contacto" className="contacto-section">
      <h2>Contáctanos</h2>
      <p>¡Envíanos un mensaje directo! Si no recibes respuesta, usa el contacto alternativo.</p>

      <div className="contacto-grid">
        <div className="contacto-card">
          <h3>Contacto Principal</h3> <br/>
          <a
            href="https://wa.me/524272259083?text=Hola%2C%20necesito%20informaci%C3%B3n%20acerca%20de%20un%20producto%20de%20tu%20tienda%2C%20%C2%BFPuedes%20ayudarme%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="icono whatsapp"
            title="WhatsApp principal"
          >
            <FaWhatsapp />
          </a>
        </div>

        <div className="contacto-card">
          <h3>Contacto Alternativo</h3> <br/>
          <a
            href="https://wa.me/524271234567?text=Hola%2C%20no%20recib%C3%AD%20respuesta%20en%20el%20otro%20n%C3%BAmero.%20%C2%BFPuedes%20ayudarme%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="icono whatsapp"
            title="WhatsApp alternativo"
          >
            <FaWhatsapp />
          </a>
        </div>

  
      </div>
    </section>
  );
}
