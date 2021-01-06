import "./style/gallery.css";

import Destacado from "../images/Gallery/Destacado.png";
import Gastronomia from "../images/Gallery/Gastronomia.png";
import Servicios from "../images/Gallery/Servicios.png";
import Tienda from "../images/Gallery/Tienda.png";
import Ofertadeldia from "../images/Gallery/Ofertadeldia.png";
import Puntos from "../images/Gallery/Puntos.png";

import { Fragment } from "react";
// import SaleOfTheDay from "./Pages/Sale-of-the-day";

const GalleryViews = () => {
  return (
    <Fragment>
      <div className="container-gallery1">
        <h2 className="texth2">MACH Beneficios</h2>
        <h5 className="texth5">
          {" "}
          Te ofrecemos gran variedad de descuentos, para disfrutar y hasta
          impulsar tu carrera profesional. Además, prepárate para canjear tus
          Puntos MACH pensados en ti.
        </h5>
      </div>

      <div class="wrapper">
        <div class="one">
          
        
         
            <img className="image1" src={Destacado} />
         
          <div className='Gastronomy--caption2'>Destacados</div>
        </div>

        <div class="two">
          
          <a href="/gastronomy">
           
            <img className="image" src={Gastronomia} />
            <div className='Gastronomy--caption'>Gastronomía</div>
          </a>
        </div>

        <div class="three">
          
          <a href="/mach-services">
            
            <img className="image" src={Servicios} />
            <div className='Gastronomy--caption2'>Servicios</div>
          </a>
        </div>
        <div class="four">
          
          <a href="/shops">
          
            <img className="image" src={Tienda} />
            <div className='Gastronomy--caption3'>Tiendas</div>
          </a>
        </div>
        <div class="five">
          
          <a href="/sale-of-the-day">
          
            <img className="image" src={Ofertadeldia} />
            <div className='Gastronomy--caption4'>Oferta del día</div>
          </a>
        </div>
        <div class="six">
          
          
          <a href="/points">
          
            <img className="image" src={Puntos} />
            <div className='Gastronomy--caption3'>Puntos MACH</div>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default GalleryViews;
