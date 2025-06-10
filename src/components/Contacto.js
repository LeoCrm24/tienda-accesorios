import './Contacto.css';
import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';

export default function Contacto() {
  return (
    <section id="contacto" className="contacto-section">
      <h2>Contáctanos</h2>
      <p>¡Síguenos en nuestras redes sociales o envíanos un mensaje directo!</p>

      <div className="redes-sociales">
        <a href="https://wa.me/5215512345678" target="_blank" rel="noopener noreferrer" className="icono whatsapp">
          <FaWhatsapp />
        </a>
        <a href="https://www.facebook.com/TuPagina" target="_blank" rel="noopener noreferrer" className="icono facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.instagram.com/TuPerfil" target="_blank" rel="noopener noreferrer" className="icono instagram">
          <FaInstagram />
        </a>
        <a href="https://www.tiktok.com/@TuUsuario" target="_blank" rel="noopener noreferrer" className="icono tiktok">
          <FaTiktok />
        </a>
      </div>
    </section>
  );
}
