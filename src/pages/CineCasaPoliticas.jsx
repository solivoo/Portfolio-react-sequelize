import { Link } from 'react-router-dom';
import './CineCasa.css';

export const CineCasaPoliticas = () => {
  return (
    <div className="cinecasa-container">
      <header className="cinecasa-header">
        <h1>Política de Privacidad</h1>
        <p className="cinecasa-subtitle">CineCasa - Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
      </header>

      <main className="cinecasa-main">
        <section className="cinecasa-section">
          <h2>1. Información que Recopilamos</h2>
          <p>
            CineCasa utiliza la API de Google Drive para acceder a archivos almacenados en tu cuenta de Google Drive. 
            La aplicación solicita los siguientes permisos:
          </p>
          <ul className="cinecasa-list">
            <li>
              <strong>Acceso a archivos:</strong> Para leer y gestionar archivos relacionados con contenido cinematográfico.
            </li>
            <li>
              <strong>Almacenamiento:</strong> Para crear y organizar carpetas y archivos en tu Google Drive.
            </li>
          </ul>
          <p>
            No recopilamos información personal adicional más allá de la necesaria para el funcionamiento de la aplicación.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>2. Uso de la Información</h2>
          <p>
            La información a la que accedemos a través de Google Drive se utiliza exclusivamente para:
          </p>
          <ul className="cinecasa-list">
            <li>Proporcionar las funcionalidades de gestión de contenido de la aplicación.</li>
            <li>Organizar y estructurar archivos relacionados con contenido cinematográfico.</li>
            <li>Permitir el acceso y visualización de archivos autorizados por el usuario.</li>
          </ul>
        </section>

        <section className="cinecasa-section">
          <h2>3. Almacenamiento de Datos</h2>
          <p>
            Todos los archivos y datos se almacenan exclusivamente en tu cuenta de Google Drive. 
            CineCasa no almacena copias de tus archivos en servidores externos. No compartimos, 
            vendemos ni transferimos tus datos a terceros.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>4. Seguridad</h2>
          <p>
            La seguridad de tus datos es una prioridad. Utilizamos las medidas de seguridad proporcionadas 
            por Google Drive API, que incluyen autenticación OAuth 2.0 y encriptación en tránsito. 
            Solo accedemos a los archivos que autorizas explícitamente.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>5. Control del Usuario</h2>
          <p>
            Tienes control total sobre los permisos otorgados a CineCasa. Puedes revocar el acceso 
            en cualquier momento desde la configuración de tu cuenta de Google. Al revocar el acceso, 
            la aplicación dejará de poder acceder a tus archivos.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>6. Cambios a esta Política</h2>
          <p>
            Nos reservamos el derecho de actualizar esta política de privacidad. Te notificaremos 
            de cualquier cambio significativo publicando la nueva política en esta página con una 
            fecha de actualización revisada.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>7. Contacto</h2>
          <p>
            Si tienes preguntas sobre esta política de privacidad, puedes contactarnos a través de:
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
            <Link to="/cinecasa_condiciones_servicios" className="cinecasa-link">
              Ver Condiciones de Servicio
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

