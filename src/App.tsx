import './App.css';
import web from './assets/icon/web.svg';
import book from './assets/icon/book.svg';
import ticket from './assets/icon/etiqueta.svg';
import ControlledCarousel from './componentes/carousel';

function App() {
  return (
    <>
      <section className='sectionOne'>
        <div className='boxText-title'>
          <h1>Diseñamos experiencias digitales que destacan y conectan</h1>
          <div className='button_container'>
            <div className='button_special'>
              <div className='text_parr'>
                <p className='text_general'>Deja en nuestras manos el diseño web y UX/UI de tu empresa. Nos especializamos en crear sitios corporativos, landing pages, one pages y tiendas virtuales para cubrir todas tus necesidades digitales.</p>
              </div>
              <button>Contactanos</button>
            </div>
          </div>
        </div>

        <div className='img_circle'></div>
        <div className='img_form'></div>
        <div className='bannerLanding'></div>

        <div className='Help_business'>
          <div className='container_text_principal'>
            <h1>¿Cómo ayudamos a tú negocio?</h1>
            <p>Utilizamos la investigación para diseñar experiencias de usuario exitosas mediante la comprensión del modelo de negocio, los objetivos, las expectativas del usuario, la competencia y las oportunidades.(estas deben ser de tamaño 24px)</p>
          </div>
          <div className='container_colors'>
            <div className='container_blue'>
              <div className='title_icons'>
                <img className='icons' src={web} alt="web" />
                <h2 className='title_h2'>Investigación</h2>
              </div>
              <p>¿Quieres entender mejor a tus usuarios? Con nuestra experiencia en investigación, te ofrecemos valiosos insights y recomendaciones para mejorar tu plataforma web o app.</p>
            </div>
            <div className='container_orange'>
              <div className='title_icons'>
                <img className='icons' src={book} alt="book" />
                <h2 className='title_h2'>Diseño de interfaces</h2>
              </div>
              <p>Diseñamos interfaces de usuario dinámicas y atractivas que captan la esencia de tu web, destacándote frente a la competencia y asegurando una experiencia única para tus usuarios.</p>
            </div>
            <div className='container_red'>
              <div className='title_icons'>
                <img className='icons' src={ticket} alt="ticket" />
                <h2 className='title_h2'>Rediseño web</h2>
              </div>
              <p>Nos especializamos en identificar áreas de mejora y rediseño de páginas web y aplicaciones, garantizando una experiencia óptima para tus usuarios y posicionando a tu negocio.</p>
            </div>
          </div>
          <div className='circles_decorations'></div>
        </div>

        <div className='impact_result'>
          <div className='carousel_img'>
            <ControlledCarousel />
          </div>
          <div className='img_circle_bold'></div>

          <div className='container_text_carousel'>
            <div className='img_form_rose'></div>
            <h1>Diseñamos para tu negocio con resultados impactantes y medibles.</h1>
            <p>Nuestros servicios de diseño capturan la esencia de tu marca y optimizan la experiencia del usuario, permitiéndote destacar en un mercado competitivo y conectar efectivamente con tu audiencia. Con un enfoque meticuloso y centrado en el usuario, y una comprensión profunda de tu negocio, garantizamos que cada aspecto de tu presencia en línea esté diseñado para maximizar el impacto y el rendimiento.</p>
          </div>
        </div>

        <div className='container_form'>
          <div className='container_text_form'>
            <h1 className='title_form'>Diseñamos para tu negocio con resultados impactantes y medibles.</h1>
            <p>Nuestros servicios de diseño capturan la esencia de tu marca y optimizan la experiencia del usuario, permitiéndote destacar en un mercado competitivo y conectar efectivamente con tu audiencia. Con un enfoque meticuloso y centrado en el usuario, y una comprensión profunda de tu negocio, garantizamos que cada aspecto de tu presencia en línea esté diseñado para maximizar el impacto y el rendimiento.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
