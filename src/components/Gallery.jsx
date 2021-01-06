<<<<<<< HEAD

import './style/gallery.css'
import React from "react";

import Gallery from "react-photo-gallery";




import image1 from '../images/Gallery/image1.png'
import image2 from '../images/Gallery/image2.png'
import image3 from '../images/Gallery/image3.png'
import image7 from '../images/Gallery/image7.png'
import image5 from '../images/Gallery/image5.png'
import image6 from '../images/Gallery/image6.png'



const GalleryViews =() =>{

  const photos = [
    {
      src:image1,
      width: 4,
      height: 7,
      className:'image1',
     
    },
    {
      src:image2,
      width: 60,
      height: 40,
      className:'image2'
    },
    {
      src: image7,
      width: 3,
      height: 6,
      className:'image7'
    },
    {
      src:image6,
      width: 3,
      height: 4,
      className:'image6'
      
   
    },
    {
      src: image5,
      width: 8,
      height: 6,
      className:'image5',
     
    
    
    },
    {
      src: image3,
      width: 4,
      height: 3,
      className:'image3'
    },
    
  ];

  <div>
            <img alt="" src="image6" />
            <p className="legend">Legend 10</p>
        </div>
  return (
    <div className ='containerGallery'>
    <h2 className= 'h2Gallery'>MACH Beneficios</h2>
    <p className='pGallery'>Te ofrecemos gran variedad de descuentos, para disfrutar y hasta impulsar tu carrera profesional. Además, prepárate para canjear tus Puntos MACH pensados en ti.</p>
      <Gallery photos={photos} direction={"column"} />
    
    </div>
  )
}
export default GalleryViews
=======
import "./style/gallery.css";

import image1 from "../images/Gallery/image1.png";
import image2 from "../images/Gallery/image2.png";
import image3 from "../images/Gallery/image3.png";
import image7 from "../images/Gallery/image7.png";
import image5 from "../images/Gallery/image5.png";
import image6 from "../images/Gallery/image6.png";
import image8 from "../images/Gallery/image8.gif";
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
      <div class="container-gallery">
        <div class="column">
          <img className="image1" src={image1} />
          <a href="/sale-of-the-day">
            {" "}
            <img className="image5" src={image5} />
          </a>
        </div>

        <div class="column">
          <a href="/gastronomy">
            {" "}
            <img className="image2" src={image2} />
          </a>
          <a href="/points">
            {" "}
            <img className="image3" src={image3} />
          </a>
          <img className="image8" src={image8} />
        </div>

        <div class="column">
          <a href="/shops">
            {" "}
            <img className="image5" src={image7} />
          </a>
          <a href="/mach-services">
            {" "}
            <img className="image6" src={image6} />
          </a>
        </div>
      </div>
    </Fragment>
  );
};
export default GalleryViews;
>>>>>>> test-fabi
