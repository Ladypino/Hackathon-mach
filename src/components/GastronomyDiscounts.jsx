import React from 'react';
import HouseBar1 from '../images/house-bar1.jpg';
import Starbuks from '../images/starbuks.png';
import Rappi from '../images/rappi.jpg';
import HouseBar from '../images/house-bar.jpg';
import Doggis from '../images/doggis.jpg';
import Sushiblue from '../images/sushi.png';
import './style/gastronomyDiscounts.css';

const GastronomyDiscounts = () => {
  return (
    <div className='Gastronomy-container'>
      <div className='Gastronomy--items'>
        <img className='Gastronomy--img' src={HouseBar1} alt="House Bar" />
        <div className='Gastronomy--caption'>40% House Bar</div>
      </div>
      <div className='Gastronomy--items'>
        <img className='Gastronomy--img' src={Doggis} alt="Doggis" />
        <div className='Gastronomy--caption2'>2x1 Doggis</div>
      </div>
      <div className='Gastronomy--items'> <a href="/gastronomy/sushiblue">
        <img className='Gastronomy--img' src={Sushiblue} alt="Sushi Blue" />
        <div className='Gastronomy--caption'>20% Sushi Blue</div>
      </a>
      </div>
      <div className='Gastronomy--items'>
        <img className='Gastronomy--img' src={HouseBar} alt="House Bar" />
        <div className='Gastronomy--caption2'>Delivery Gratis House Bar</div>
      </div>
      <div className='Gastronomy--items'>
        <img className='Gastronomy--img' src={Rappi} alt="Rappi" />
        <div className='Gastronomy--caption'>Delivery Gratis Rappi</div>
      </div>
      <div className='Gastronomy--items'>
        <img className='Gastronomy--img' src={Starbuks} alt="Starbuks" />
        <div className='Gastronomy--caption2'>50% Starbuks</div>
      </div>
    </div>
  )
};
export default GastronomyDiscounts;