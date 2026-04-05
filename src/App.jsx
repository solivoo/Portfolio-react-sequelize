import { useState } from 'react'
import { useForm } from 'react-hook-form';
import './App.css'
import './start.css'
import './start.js'
import './components/styles/loading-screen.css'
import LoadingScreen from './components/LoadingScreen';
import Notification from './components/Notification';
import { Link, Element, animateScroll as scroll } from 'react-scroll'
import axios from './utils/axios';

/**
 * Render / API externo: `VITE_API_URL` apunta a otro origen → POST `/emails/contact`.
 * Netlify (o mismo sitio): siempre `/.netlify/functions/send-email` aunque exista `VITE_API_URL` en el panel.
 */
function getContactPostPath() {
  const base = import.meta.env.VITE_API_URL?.trim() ?? '';
  if (!base) return '/.netlify/functions/send-email';
  if (typeof window === 'undefined') return '/.netlify/functions/send-email';
  try {
    const apiOrigin = new URL(base).origin;
    if (apiOrigin === window.location.origin) {
      return '/.netlify/functions/send-email';
    }
  } catch {
    return '/.netlify/functions/send-email';
  }
  return '/emails/contact';
}

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [languaje, setlanguaje] = useState(false);
  const [notification, setNotification] = useState({ show: false, variant: "", message: "" })
  const { register, reset, handleSubmit, formState: { errors } } = useForm();

  const submit = data => {
    setIsLoading(true);
    axios.post(getContactPostPath(), data)
      .then(() => setNotification({ show: true, variant: "success", message: "Message sent!" }))
      .catch(() => setNotification({ show: true, variant: "danger", message: "There was an error" }))
      .finally(() => setIsLoading(false));

    reset({
      name: '',
      phone: '',
      message: '',
      email: '',
    })
  }

  const handleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleLanguaje = () => {
    setlanguaje(!languaje)
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  //funcion que retorna el año actual
  const getCurrentYear = () => {
    return new Date().getFullYear();
  }


  return (
    <>
      <div className="app_content stars-container">
                    
        <div className="app_header">
          <div className="nav_container">
            <h1
              className='app_logo'
              style={{ cursor: 'pointer' }}
              onClick={scrollToTop}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  scrollToTop();
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={languaje ? 'Volver arriba' : 'Back to top'}
            >
              .oS
            </h1>
            <div className="app_menu">
              <ul className='app_ul'>
                <li className='app_li'><Link className='app_li' to="aboutMe" activeClass="active" spy={false} smooth={true} duration={500} offset={-70}> {languaje ? 'Acerca de mi' : 'About me'} </Link></li>
                <li className='app_li'><Link className='app_li' to="projects" spy={true} smooth={true} offset={-70} duration={500}> {languaje ? 'Proyectos' : 'Projects'} </Link></li>
                <li className='app_li'><Link className='app_li' to="academic" spy={true} smooth={true} offset={-70} duration={500}> {languaje ? 'Academico' : 'Academic'} </Link></li>
                <li className='app_li'><a className='app_li' href="/CV.pdf" target="_blank" rel="noopener noreferrer">CV</a></li>
                <li className='app_li'><Link className='app_li' to="contact" spy={true} smooth={true} offset={-70} duration={500}> {languaje ? 'Contacto' : 'Contact'} </Link></li>
                <div className="languaje" onClick={handleLanguaje}>{languaje ? <span className='en'>EN</span> : <span className='es'>ES</span>}</div>
              </ul>
            </div>
          </div>

          <div className="languaje_menu">
            <div className="languaje" onClick={handleLanguaje}>{languaje ? <span className='en'>EN</span> : <span className='es'>ES</span>}</div>
            <i onClick={handleMenu} className='bx bx-menu'></i>
            {
              isOpen
                ? <div className="menu_movil">
                  <i className='bx bx-x' onClick={handleMenu} style={{ color: '#ffffff' }} ></i>
                  <ul className='menu_movil_ul'>
                    <li className='menu_movil_li'><Link className='app_li' to="aboutMe" activeClass="active" spy={false} smooth={true} duration={500} offset={-70} onClick={handleMenu}>{languaje ? 'Acerca de mi' : 'About me'}</Link></li>
                    <li className='menu_movil_li'><Link className='app_li' to="projects" spy={true} smooth={true} offset={-70} duration={500} onClick={handleMenu}> {languaje ? 'Proyectos' : 'Projects'} </Link></li>
                    <li className='menu_movil_li'><Link className='app_li' to="academic" spy={true} smooth={true} offset={-70} duration={500} onClick={handleMenu}> {languaje ? 'Academico' : 'Academic'} </Link></li>
                    <li className='menu_movil_li app_li' style={{ paddingLeft: "10px" }} onClick={handleMenu}><a className='app_li' href="/CV.pdf" target="_blank" rel="noopener noreferrer" >CV</a></li>
                    <li className='menu_movil_li'><Link className='app_li' to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={handleMenu}> {languaje ? 'Contacto' : 'Contact'} </Link></li>
                  </ul>
                </div>
                : ''
            }
          </div>
        </div>

        <div className="link_fixes">
          <i className='bx bxl-linkedin-square'></i>
          <i className='bx bxl-github' ></i>
          <i className='bx bxl-gmail' ></i>
          <i className='bx bxl-codepen'></i>
        </div>

        <div className="button_navigate">
          <button id="section1Btn"></button>
          <button id="section2Btn"></button>
          <button id="section3Btn"></button>
        </div>

        <section id="section1">
          <div className="app_content_section1">

            <div className="info_section_1_">
              <div className="section_1_left">
                <div className="app_text_section_1">
                  <h3 className='hello'>{languaje ? 'Hola, soy Sergio' : "Hello, I'm Sergio"}</h3>
                  <h4 className='introduction'>
                    {languaje ? 'Creo experiencias digitales, donde la creatividad se fusiona con el' : 'I create digital experiences, where creativity merges with'}
                    <span className='menorque'> &lt;</span>{languaje ? 'codigo' : 'code'}<span></span>
                    <span className='mayorque'>&gt;</span>
                  </h4>
                </div>
              </div>

              <div className="section_2_right">
                <div className="app_windows_png">
                  <img className="windowsimg" src="/windows.png" alt="" />
                </div>

              </div>
            </div>

            <div className="app_box_section_1">

              <div className="app_box_hability">
                <div className="img_hability">
                  <img className="img_box" src="/comunication.svg" alt="" />
                </div>
                <div className="app_text_hability">
                  <h3 className='text_hability_title'>{languaje ? 'Comunicacion' : 'Communication'}</h3>
                  <h4 className='text_hability_summary'>{languaje ? 'Transmitir ideas de forma clara y persuasiva, fomentando el entendimiento mutuo.' : 'Conveying ideas clearly and persuasively, fostering mutual understanding.'}</h4>
                </div>
              </div>
              <div className="app_box_hability">
                <div className="img_hability">
                  <img className="img_box" src="/team.png" alt="" />
                </div>
                <div className="app_text_hability">
                  <h3 className='text_hability_title'>{languaje ? 'Equipo de trabajo' : 'Teamwork'}</h3>
                  <h4 className='text_hability_summary'>{languaje ? 'Colaborar eficazmente en grupos para lograr objetivos colectivos exitosos.' : 'Collaborating effectively in groups to achieve successful collective goals.'}</h4>
                </div>
              </div>
              <div className="app_box_hability">
                <div className="img_hability">
                  <img className="img_box" src="/thinking.svg" alt="" />
                </div>
                <div className="app_text_hability">
                  <h3 className='text_hability_title'>{languaje ? 'Pensamiento critico' : 'Critical Thinking'}</h3>
                  <h4 className='text_hability_summary'>{languaje ? 'Analizar, evaluar y resolver creativamente problemas de forma lógica.' : 'Analyzing, evaluating, and creatively solving problems logically.'}</h4>
                </div>
              </div>
              <div className="app_box_hability">
                <div className="img_hability">
                  <img className="img_box" src="/adaptability.svg" alt="" />
                </div>
                <div className="app_text_hability">
                  <h3 className='text_hability_title'>{languaje ? 'Adaptacion al cambio' : 'Adaptability to Change'}</h3>
                  <h4 className='text_hability_summary'>{languaje ? 'Flexibilidad para adaptarse a nuevas circunstancias y desafíos.' : 'Flexibility to adjust to new circumstances and challenges.'}</h4>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="section2">
          <Element className="title_section" name="aboutMe"><h3><span className='title_mq'>&lt;</span>{languaje ? 'Acerca de mi' : 'About me'}<span className='title_mq'>&gt;</span></h3></Element>
          <div className="aboutMe_container">
            <div className="presentation_container">
              <div className="cardMe_left">
                <div className="cardMe">
                  <img className="cardMe_img" src="/cardme.webp" alt="" />
                </div>

                <div className="summary_me">
                  <p> {languaje ? 'Como desarrollador web, estoy orgulloso de ofrecer servicios de alta calidad que satisfagan sus necesidades, mi principal objetivo. es crear servicios funcionales, atractivos y orientados a resultados' : 'As a web developer, I am proud to offer services of high quality that meet your needs, my main objective is to create functional, attractive and results-oriented'} </p>
                  <img className="borderGreen" src="/borderGreen.svg" alt="" />
                </div>
              </div>

              <div className="tecnology_right">
                <h3 className='tecnology_text'>{languaje ? 'Tecnologias' : 'Tecnology'}</h3>
                <img className="tecnology_img" src="/tecnology.png" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section id="section3">
          <Element className="title_section" name="projects"><h3><span className='title_mq'>&lt;</span>{languaje ? 'Proyectos' : 'Projects'}<span className='title_mq'>&gt;</span></h3></Element>
          <div className="projects_container">
            <div className="proyect">
              <div className="proyect_img_container">
                <div className="transparent_hover"><a href='https://ecommercesergiolivo.netlify.app/'><i className='bx bx-show'></i></a></div>
                <img className="proyect_img" src="/ecommerce1.png" alt="" />
              </div>
              <div className="details_proyect">
                <p className='title_proyect'>Academnlo Store</p>
                <p className='summary_proyect'>Desarrolle un impresionante sitio web de comercio electrónico en javascript vanilla que muestra mis
                  habilidades como desarrollador web. Esta plataforma de comercio electrónico está diseñada para proporcionar
                  una experiencia de compra fluida para los usuarios, con una interfaz fácil de usar y una navegación intuitiva.
                </p>
                <div className="icon_tecnology">
                  <i className='bx bxl-css3'></i>
                  <i className='bx bxl-javascript'></i>
                  <i className='bx bxl-html5'></i>
                  <i className='bx bxl-postgresql'></i>
                </div>
              </div>

            </div>

            <div className="proyect">
              <div className="proyect_img_container">
                <div className="transparent_hover"><a href='https://tecnomania.netlify.app/'><i className='bx bx-show'></i></a></div>
                <img className="proyect_img" src="/ecommerce2.jpg" alt="" />
              </div>
              <div className="details_proyect">
                <p className='title_proyect'>Tecnomania Store</p>
                <p className='summary_proyect'>Realice un sitio web de comercio electrónico impactante utilizando React puro,
                  para destacar mis habilidades como desarrollador web. Esta plataforma de comercio electrónico ha sido meticulosamente
                  diseñada para ofrecer una experiencia de compra excepcional, con una interfaz amigable y una navegación intuitiva, brindando
                  comodidad a los usuarios.
                </p>
                <div className="icon_tecnology">
                  <i className='bx bxl-react'></i>
                  <i className='bx bxl-css3'></i>
                  <i className='bx bxl-postgresql'></i>
                </div>
              </div>
            </div>

          </div>
        </section>

        <section id="section4">
          <Element className="academic" name="academic"><h3><span className='title_mq'>&lt;</span>{languaje ? 'Academico' : 'Academic'}<span className='title_mq'>&gt;</span></h3></Element>
          <div className="certificate_container">
            <div className="certificate">
              <a className="link_certificate" target="_blank" rel="noopener noreferrer" href="https://certificates.academlo.com/en/verify/17035174719055">
                <img className="certificate_img" src="https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/17035174719055.png" alt="" />
              </a>
            </div>

            <div className="certificate">
              <a className="link_certificate" target="blank" href="https://certificates.academlo.com/en/verify/54052267171091">
                <img className="certificate_img" src="https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/54052267171091.png" alt="" />
              </a>
            </div>

            <div className="certificate">
              <a target="blank" href="https://certificates.academlo.com/en/verify/42721833365346">
                <img className="certificate_img" src="https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/42721833365346.png" alt="" />
              </a>
            </div>

            <div className="certificate">
              <a className="link_certificate" target="blank" href="https://certificates.academlo.com/en/verify/28422275098944">
                <img className="certificate_img" src="https://verified-bucket.s3.eu-central-1.amazonaws.com/cert/28422275098944.png" alt="" />
              </a>
            </div>
          </div>
        </section>

        <section id='section5'>
          <Element className="contact" name="contact"><h3><span className='title_mq'>&lt;</span>{languaje ? 'Contacto' : 'Contact'}<span className='title_mq'>&gt;</span></h3></Element>
          <form onSubmit={handleSubmit(submit)}>
            <h3 className='contact_text'>{languaje ? 'Contact me 🤝' : 'Contactame 🤝'}</h3>
            <div className="container_name_phone">
              <div className="name_container">
                <label className="label_form">{languaje ? 'Nombre' : 'Name'} </label>
                <input type="text" {...register('name', { required: true })} />
                {errors.name && <span> {languaje ? 'Este campo es requerido' : 'this field is required'}</span>}
              </div>
              <div className="phone_container">
                <label className="label_form">{languaje ? 'Celular' : 'Phone'}</label>
                <input type="text" {...register('phone', { required: true })} />
                {errors.phone && <span>{languaje ? 'Este campo es requerido' : 'this field is required'}</span>}
              </div>
            </div>

            <div className="email">
              <label className="label_form">Email</label>
              <input type="email" {...register('email', { required: true })} />
              {errors.email && <span>{languaje ? 'Este campo es requerido' : 'this field is required'}</span>}
            </div>

            <div className="message">
              <label className="label_form">{languaje ? 'Mensaje' : 'Message'}</label>
              <textarea className="textArea_form" name="" id="" cols="30" rows="10" {...register('message', { required: true })}></textarea>
              {errors.message && <span>{languaje ? 'Este campo es requerido' : 'this field is required'}</span>}
            </div>

            <button className='button_form'>{languaje ? 'Enviar' : 'Submit'}</button>
            {isLoading && <LoadingScreen />}
            <Notification
              {...notification}
              handleClose={() => setNotification({ ...notification, show: false })}
            />
          </form>

        </section>


        <footer>
          <article className="contact_footer" id="contact">
          
              
            <div className="elements">
              <div className="items">
                <i className='bx bxl-github img_contact'></i>
                <a className='link_footer' target="_blank" rel="noopener noreferrer"
                  href="https://github.com/HitsoKeyco">https://github.com/solivo</a>
              </div>
              <div className="items">
                <i className='bx bxl-linkedin-square img_contact'></i>
                <a className='link_footer' target="_blank" rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/sergiolivo/">https://www.linkedin.com/in/sergiolivo/</a>
              </div>
              <div className="items">
                <i className='bx bxl-gmail img_contact'></i>
                <a className='link_footer' target="_blank" rel="noopener noreferrer" href="https://gmail.com">olivosergio09@gmail.com</a>
              </div>

              <p className='derechos'>&copy; {languaje ? 'Derechos Reservados ' + getCurrentYear() : 'All Rights Reserved ' + getCurrentYear()}</p>
              
            </div>
            <a className='link_footer' target="_blank" rel="noopener noreferrer" href="https://wa.link/tmbgbo">
              <img className="logoWhatsapp" src="/logoWhatsapp.svg" alt="" />
            </a>
          </article>

        </footer>


      </div>
    </>
  );
}

export default App;
