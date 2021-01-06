import React from 'react';
// import HouseBar1 from '../images/house-bar1.jpg';
// import Starbuks from '../images/starbuks.png';
// import Rappi from '../images/rappi.jpg';
// import HouseBar from '../images/house-bar.jpg';
// import Doggis from '../images/doggis.jpg';
// import Sushiblue from '../images/sushi.png';
import './style/gastronomyDiscounts.css';



// import React from 'react';
import card from '../images/bolsa.png';
import card2 from '../images/avion.png';
import card3 from '../images/medico.png';
import card4 from '../images/manejar.png';
import card5 from '../images/conversar.png';
import card6 from '../images/cafe.png';
import card7 from '../images/compras.png';

// import './style/cardsServices.css'
// import { Cards } from 'react-responsive-cards'
 
const CardsServices = () => {
  return(

    <div className='Gastronomy-container'>
     
    <div className='Gastronomy--items'>
      <img className='Gastronomy--img' src={card} alt="House Bar" />
      <div className='Gastronomy--caption'>Delivery Gratis Rappi</div>
    </div>
    <div className='Gastronomy--items'>
      <img className='Gastronomy--img' src={card2} alt="Doggis" />
      <div className='Gastronomy--caption2'>15% SKY</div>
    </div>
    <div className='Gastronomy--items'> <a href="/gastronomy/sushiblue">
      <img className='Gastronomy--img' src={card3} alt="Sushi Blue" />
      <div className='Gastronomy--caption'>50% Medismart</div>
    </a>
    </div>

  
    <div className='Gastronomy--items mt-5'>
      <img className='Gastronomy--img' src={card4} alt="House Bar" />
      <div className='Gastronomy--caption2'>$25.000 menos en Cabify</div>
    </div>
    <div className='Gastronomy--items mt-5'>
      <img className='Gastronomy--img' src={card5} alt="Rappi" />
      <div className='Gastronomy--caption'>80% Coder House</div>
    </div>
    <div className='Gastronomy--items mt-5'>
      <img className='Gastronomy--img' src={card6} alt="Starbuks" />
      <div className='Gastronomy--caption2'>$7.000 a tu cuenta VirginM</div>
    </div>
    </div>
 
)

  }
  export default CardsServices;







//     <div className="container">
//       <div className="row">
//         <div className="col-4 my-5">
//           <div className="">
//             <img src={card} alt="" className="img-fluid services-images"/>
//           </div>
//           <div className="services-title card1">
//             <p className="p-2 mb-0">Delivery Gratis Rappi</p>
//           </div>
//         </div>
//         <div className="col-4 my-5">
//           <div className="">
//             <img src={card2} alt="" className="img-fluid services-images"/>
//           </div>
//           <div className="services-title card2">
//             <p className="p-2 mb-0">15% SKY</p>
//           </div>
//         </div>
//         <div className="col-4 my-5">
//           <div className="">
//             <img src={card3} alt="" className="img-fluid services-images"/>
//           </div>
//           <div className="services-title card3">
//             <p className="p-2 mb-0">50% Medismart</p>
//           </div>
//         </div>
//         <div className="col-4 mb-5">
//           <div className="">
//             <img src={card4} alt="" className="img-fluid services-images"/>
//           </div>
//           <div className="services-title card4">
//             <p className="p-2 mb-0">$25.000 menos en Cabify</p>
//           </div>
//         </div>
//         <div className="col-4 mb-5">
//           <div className="">
//             <img src={card5} alt="" className="img-fluid services-images"/>
//           </div>
//           <div className="services-title card5">
//             <p className="p-2 mb-0">80% Coder House</p>
//           </div>
//         </div>
//         <div className="col-4 mb-5">
//           <div className="">
//             <img src={card6} alt="" className="img-fluid services-images"/>
//           </div>
//           <div className="services-title card6">
//             <p className="p-2 mb-0">$7.000 a tu cuenta VirginM</p>
//           </div>
//         </div>
//         {/* <div className="col-4 mb-3">
//           <div className="">
//             <img src={card7} alt="" className="img-fluid services-images"/>
//           </div>
//           <div className="services-title">
//             <p className="p-2 mb-0">Delivery Gratis Rappi</p>
//           </div>
//         </div> */}
//       </div>
//     </div>
//   )
// }
 

