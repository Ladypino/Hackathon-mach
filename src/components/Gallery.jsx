
import './style/gallery.css'
import React from "react";

import Gallery from "react-photo-gallery";

import HeroSale from "./HeroSaleOfTheDay"
import SaleDay from "./SaleDay"
import SaleOfTheDay from "../Pages/Sale-of-the-day";


import image1 from '../images/Gallery/image1.png'
import image2 from '../images/Gallery/image2.png'
import image3 from '../images/Gallery/image3.png'
import image7 from '../images/Gallery/image7.png'
import image5 from '../images/Gallery/image5.png'
import image6 from '../images/Gallery/image6.png'
import { Link } from 'react-router-dom';
import { ButtonToggle } from 'reactstrap';
import { Button } from 'bootstrap';


const GalleryViews =() =>{

  const photos = [
    {
      src:image1,
      placement:"bottom",
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
      href: "/Sale-of-the-day",
      http:'//localhost:3000/sale-of-the-day',
    
    
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