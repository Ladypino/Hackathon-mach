import React from 'react';
import Miniso from '../images/miniso.jpg';
import Hm from '../images/h-m.jpg';
import PcFactory from '../images/download.jpg';
import Arrow from '../images/arrow.jpg';
import Marmot from '../images/marmot.jpg';
import Clarks from '../images/clarks.jpg';
import './style/shopsDiscounts.css';

const ShopsDiscounts = () => {
  return (
    <div className='Shops-container'>
      <div className='Shops--items'>
        <img className='Shops--img' src={Miniso} alt="Miniso" />
        <div className='Shops--caption'>25% Miniso</div>
      </div>
      <div className='Shops--items'>
        <img className='Shops--img' src={Hm} alt="HM" />
        <div className='Shops--caption2'>20% H&#38;M</div>
      </div>
      <div className='Shops--items'>
        <img className='Shops--img' src={PcFactory} alt="Pc Factory" />
        <div className='Shops--caption'>10% Pc Factory</div>
      </div>
      <div className='Shops--items mt-5'>
        <img className='Shops--img' src={Arrow} alt="Arrow" />
        <div className='Shops--caption2'>2x1 Arrow</div>
      </div>
      <div className='Shops--items mt-5'>
        <img className='Shops--img' src={Marmot} alt="Marmot" />
        <div className='Shops--caption'>35% Marmot</div>
      </div>
      <div className='Shops--items mt-5'>
        <img className='Shops--img' src={Clarks} alt="Clarks" />
        <div className='Shops--caption2'>3x2 Clarks</div>
      </div>
    </div>
  )
};
export default ShopsDiscounts;