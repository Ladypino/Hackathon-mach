
import './style/gallery.css'
import React from "react";

import Gallery from "react-photo-gallery";


import image1 from '../images/Gallery/gallery1.jpg'
import image2 from '../images/Gallery/gallery2.jpg'
import image3 from '../images/Gallery/gallery3.jpg'
import image4 from '../images/Gallery/gallery4.jpg'
import image5 from '../images/Gallery/gallery5.png'
import image6 from '../images/Gallery/gallery6.jpg'


const GalleryViews =() =>{

  const photos = [
    {
      src:image1,
      placement:"bottom",
      width: 5,
      height: 6,
      className:'image1',
     
    },
    {
      src:image2,
      width: 60,
      height: 40,
      className:'image2'
    },
    {
      src: image3,
      width: 3,
      height: 4,
      className:'image3'
    },
    {
      src:image4,
      width: 3,
      height: 4,
      className:'image4'
   
    },
    {
      src: image5,
      width: 3,
      height: 3,
      className:'image5'
    },
    {
      src: image6,
      width: 4,
      height: 3,
      className:'image6'
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