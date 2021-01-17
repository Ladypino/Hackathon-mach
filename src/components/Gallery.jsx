import "./style/gallery.css";
import Destacado from "../images/Gallery/Destacado.png";
import Gastronomia from "../images/Gallery/Gastronomia.png";
import Servicios from "../images/Gallery/Servicios.png";
import Tienda from "../images/Gallery/Tienda.png";
import Ofertadeldia from "../images/Gallery/Ofertadeldia.png";
import Puntos from "../images/Gallery/Puntos.png";

import React, { Fragment } from "react";

const GalleryViews = () => {
  return (
    <Fragment>
      <div className="container-gallery1">
        <h2 className="texth2">MACH Beneficios</h2>
        <h5 className="texth5">
          Te ofrecemos gran variedad de descuentos, para disfrutar y hasta
          impulsar tu carrera profesional. Además, prepárate para canjear tus
          Puntos MACH pensados en ti.
        </h5>
      </div>

      <div className="wrapper">
        <div className="one">
          <img className="image1" src={Destacado} alt="Destacados" />
          <div className='Gallery--caption2'>Destacados</div>
        </div>

        <div className="two">
          <a href="/gastronomy">
            <img className="image" src={Gastronomia} alt="Gastronomia" />
            <div className='Gallery--caption1'>Gastronomía</div>
          </a>
        </div>

        <div className="three">
          <a href="/mach-services">
            <img className="image" src={Servicios} alt="Servicios" />
            <div className='Gallery--caption2'>Servicios</div>
          </a>
        </div>
        <div className="four">
          <a href="/shops">
            <img className="image" src={Tienda} alt="Tiendas" />
            <div className='Gallery--caption3'>Tiendas</div>
          </a>
        </div>
        <div className="five">
          <a href="/sale-of-the-day">
            <img className="image" src={Ofertadeldia} alt="Oferta del dia" />
            <div className='Gallery--caption4'>Oferta del día</div>
          </a>
        </div>
        <div className="six">
          <a href="/points">
            <img className="image" src={Puntos} alt="Puntos" />
            <div className='Gallery--caption3'>Puntos MACH</div>
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default GalleryViews;
