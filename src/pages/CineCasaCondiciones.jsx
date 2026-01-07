import { Link } from 'react-router-dom';
import './CineCasa.css';

export const CineCasaCondiciones = () => {
  return (
    <div className="cinecasa-container">
      <header className="cinecasa-header">
        <h1>Condiciones de Servicio</h1>
        <p className="cinecasa-subtitle">CineCasa - Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </header>

      <main className="cinecasa-main">
        <section className="cinecasa-section">
          <h2>1. Aceptación de los Términos</h2>
          <p>
            Al acceder y utilizar CineCasa, aceptas estar sujeto a estos Términos de Servicio y a todas 
            las leyes y regulaciones aplicables. Si no estás de acuerdo con alguno de estos términos, 
            no debes utilizar la aplicación.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>2. Descripción del Servicio</h2>
          <p>
            CineCasa es una plataforma web que permite a los usuarios gestionar y organizar contenido 
            cinematográfico mediante la integración con Google Drive. El servicio incluye:
          </p>
          <ul className="cinecasa-list">
            <li>Gestión de archivos relacionados con contenido cinematográfico.</li>
            <li>Organización de contenido en estructuras de carpetas.</li>
            <li>Acceso a información y recursos almacenados en Google Drive.</li>
          </ul>
        </section>

        <section className="cinecasa-section">
          <h2>3. Uso Aceptable</h2>
          <p>
            Al utilizar CineCasa, te comprometes a:
          </p>
          <ul className="cinecasa-list">
            <li>Utilizar el servicio únicamente para fines legales y legítimos.</li>
            <li>No utilizar el servicio para almacenar o distribuir contenido ilegal, protegido por derechos de autor sin autorización, o material ofensivo.</li>
            <li>No intentar acceder a áreas no autorizadas del servicio o interferir con su funcionamiento.</li>
            <li>Mantener la confidencialidad de tus credenciales de acceso.</li>
            <li>No utilizar el servicio de manera que pueda dañar, deshabilitar o sobrecargar los servidores o la infraestructura.</li>
          </ul>
        </section>

        <section className="cinecasa-section">
          <h2>4. Integración con Google Drive</h2>
          <p>
            CineCasa utiliza la API de Google Drive para proporcionar sus funcionalidades. Al utilizar 
            el servicio, aceptas:
          </p>
          <ul className="cinecasa-list">
            <li>Cumplir con los Términos de Servicio de Google Drive.</li>
            <li>Ser responsable del contenido que almacenas y gestionas a través de la aplicación.</li>
            <li>Entender que el acceso a Google Drive está sujeto a los permisos que otorgues y puedes revocar en cualquier momento.</li>
          </ul>
        </section>

        <section className="cinecasa-section">
          <h2>5. Propiedad Intelectual</h2>
          <p>
            El contenido que gestionas a través de CineCasa permanece bajo tu propiedad. CineCasa no 
            reclama ningún derecho de propiedad sobre tus archivos o contenido. La aplicación, su diseño, 
            código y funcionalidades son propiedad de CineCasa y están protegidos por las leyes de 
            propiedad intelectual.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>6. Limitación de Responsabilidad</h2>
          <p>
            CineCasa se proporciona "tal cual" sin garantías de ningún tipo. No garantizamos que el 
            servicio esté libre de errores, interrupciones o defectos. No seremos responsables de 
            ningún daño directo, indirecto, incidental o consecuente que resulte del uso o la imposibilidad 
            de usar el servicio.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>7. Modificaciones del Servicio</h2>
          <p>
            Nos reservamos el derecho de modificar, suspender o discontinuar cualquier aspecto del 
            servicio en cualquier momento, con o sin previo aviso. No seremos responsables ante ti 
            ni ante ningún tercero por cualquier modificación, suspensión o discontinuación del servicio.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>8. Terminación</h2>
          <p>
            Podemos terminar o suspender tu acceso al servicio inmediatamente, sin previo aviso, 
            por cualquier motivo, incluyendo si violas estos Términos de Servicio. Al terminar, 
            tu derecho a utilizar el servicio cesará inmediatamente.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>9. Ley Aplicable</h2>
          <p>
            Estos Términos de Servicio se regirán e interpretarán de acuerdo con las leyes aplicables, 
            sin dar efecto a ningún principio de conflictos de leyes.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>10. Contacto</h2>
          <p>
            Si tienes preguntas sobre estos Términos de Servicio, puedes contactarnos a través de:
          </p>
          <p>
            Email: olivosergio09@gmail.com
          </p>
        </section>

        <section className="cinecasa-section">
          <div className="cinecasa-links">
            <Link to="/cinecasa" className="cinecasa-link">
              Volver a la página principal
            </Link>
            <Link to="/cinecasa_politicas" className="cinecasa-link">
              Ver Política de Privacidad
            </Link>
          </div>
        </section>
      </main>

      <footer className="cinecasa-footer">
        <p>&copy; 2024 CineCasa. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

