import React from 'react';
import card from '../images/img-home.jpeg'
import './style/cardsServices.css'
// import { Cards } from 'react-responsive-cards'
 
const CardsServices = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-4 mb-3">
          <div className="">
            <img src={card} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title">
            <p className="p-2 mb-0">Delivery Gratis Rappi</p>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div className="">
            <img src={card} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title">
            <p className="p-2 mb-0">Delivery Gratis Rappi</p>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div className="">
            <img src={card} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title">
            <p className="p-2 mb-0">Delivery Gratis Rappi</p>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div className="">
            <img src={card} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title">
            <p className="p-2 mb-0">Delivery Gratis Rappi</p>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div className="">
            <img src={card} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title">
            <p className="p-2 mb-0">Delivery Gratis Rappi</p>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div className="">
            <img src={card} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title">
            <p className="p-2 mb-0">Delivery Gratis Rappi</p>
          </div>
        </div>
        <div className="col-4 mb-3">
          <div className="">
            <img src={card} alt="" className="img-fluid services-images"/>
          </div>
          <div className="services-title">
            <p className="p-2 mb-0">Delivery Gratis Rappi</p>
          </div>
        </div>
      </div>
    </div>
  )
}
 
export default CardsServices;
