import { Link } from 'react-router-dom';
import './CineCasa.css';

export const CineCasaHome = () => {
  return (
    <div className="cinecasa-container">
      <header className="cinecasa-header">
        <h1>CineCasa</h1>
        <p className="cinecasa-subtitle">Plataforma de Gestión de Contenido Cinematográfico</p>
      </header>

      <main className="cinecasa-main">
        <section className="cinecasa-section">
          <h2>Acerca de CineCasa</h2>
          <p>
            CineCasa es una aplicación web diseñada para la gestión y organización de contenido cinematográfico. 
            Nuestra plataforma permite a los usuarios gestionar, organizar y acceder a información relacionada 
            con películas, series y contenido multimedia de manera eficiente y segura.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>Funcionalidad de la Aplicación</h2>
          <div className="cinecasa-features">
            <div className="cinecasa-feature">
              <h3>Gestión de Contenido</h3>
              <p>
                Organiza y gestiona tu biblioteca de contenido cinematográfico de forma intuitiva. 
                Accede a información detallada sobre películas, series y otros contenidos multimedia.
              </p>
            </div>
            <div className="cinecasa-feature">
              <h3>Integración con Google Drive</h3>
              <p>
                CineCasa utiliza la API de Google Drive para almacenar y gestionar archivos relacionados 
                con el contenido cinematográfico, permitiendo un acceso seguro y organizado a tus recursos.
              </p>
            </div>
            <div className="cinecasa-feature">
              <h3>Interfaz Intuitiva</h3>
              <p>
                Diseñada con un enfoque en la experiencia del usuario, CineCasa ofrece una interfaz 
                clara y fácil de usar para navegar y gestionar tu contenido.
              </p>
            </div>
          </div>
        </section>

        <section className="cinecasa-section">
          <h2>Uso de Datos del Usuario</h2>
          <p>
            CineCasa solicita acceso a Google Drive para los siguientes propósitos:
          </p>
          <ul className="cinecasa-list">
            <li>
              <strong>Almacenamiento de archivos:</strong> Para guardar y organizar archivos relacionados 
              con el contenido cinematográfico en tu cuenta de Google Drive.
            </li>
            <li>
              <strong>Lectura de archivos:</strong> Para acceder a los archivos almacenados y permitir 
              la visualización y gestión del contenido.
            </li>
            <li>
              <strong>Organización de contenido:</strong> Para crear y gestionar carpetas y estructuras 
              organizativas dentro de Google Drive.
            </li>
          </ul>
          <p className="cinecasa-transparency">
            <strong>Transparencia:</strong> Todos los datos se almacenan exclusivamente en tu cuenta de Google Drive. 
            CineCasa no almacena, copia ni comparte tus archivos con terceros. Solo accedemos a los archivos 
            que tú autorizas explícitamente y únicamente para proporcionar las funcionalidades de la aplicación.
          </p>
        </section>

        <section className="cinecasa-section">
          <h2>Política de Privacidad y Términos</h2>
          <p>
            Para más información sobre cómo manejamos tus datos y los términos de uso de la aplicación, 
            consulta nuestros documentos legales:
          </p>
          <div className="cinecasa-links">
            <Link to="/cinecasa_politicas" className="cinecasa-link">
              Política de Privacidad
            </Link>
            <Link to="/cinecasa_condiciones_servicios" className="cinecasa-link">
              Condiciones de Servicio
            </Link>
          </div>
        </section>
      </main>

      <footer className="cinecasa-footer">
        <p>&copy; 2024 CineCasa. Todos los derechos reservados.</p>
        <p>Desarrollado por Sergio Olivo</p>
      </footer>
    </div>
  );
};

