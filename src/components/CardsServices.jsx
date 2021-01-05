import React from 'react';
import card from '../images/bolsa.png';
import card2 from '../images/avion.png';
import card3 from '../images/medico.png';
import card4 from '../images/manejar.png';
import card5 from '../images/conversar.png';
import card6 from '../images/cafe.png';
// import card7 from '../images/compras.png';

import './style/cardsServices.css'
// import { Cards } from 'react-responsive-cards'
 
const CardsServices = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-4 my-5">
          <div className="">
            <img src={card} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title card1">
            <p className="p-2 mb-0">Delivery Gratis Rappi</p>
          </div>
        </div>
        <div className="col-4 my-5">
          <div className="">
            <img src={card2} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title card2">
            <p className="p-2 mb-0">15% SKY</p>
          </div>
        </div>
        <div className="col-4 my-5">
          <div className="">
            <img src={card3} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title card3">
            <p className="p-2 mb-0">50% Medismart</p>
          </div>
        </div>
        <div className="col-4 mb-5">
          <div className="">
            <img src={card4} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title card4">
            <p className="p-2 mb-0">$25.000 menos en Cabify</p>
          </div>
        </div>
        <div className="col-4 mb-5">
          <div className="">
            <img src={card5} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title card5">
            <p className="p-2 mb-0">80% Coder House</p>
          </div>
        </div>
        <div className="col-4 mb-5">
          <div className="">
            <img src={card6} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title card6">
            <p className="p-2 mb-0">$7.000 a tu cuenta VirginM</p>
          </div>
        </div>
        {/* <div className="col-4 mb-3">
          <div className="">
            <img src={card7} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title">
            <p className="p-2 mb-0">Delivery Gratis Rappi</p>
          </div>
        </div> */}
      </div>
    </div>
  )
}
 
export default CardsServices;
