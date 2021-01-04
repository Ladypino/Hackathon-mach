import React from 'react';
import imageCoverPage from '../images/image-cover-page.jpg';
import './style/coverPage.css';

const CoverPage = () => {
  return (
    <section>
      <div className='CoverPage--ctn'>
        <h1 className='CoverPage--ctn-h1'>Ser #MACHLovers tiene su recompensa</h1>
        <h3 className='CoverPage--ctn-h3'>En MACH, premiamos tu lealtad con los mejores y más exclusivos beneficios.</h3>
      </div>
      <img className='CoverPage--img' src={imageCoverPage} alt='Portada Mach Beneficios' />
      <button className='CoverPage--btn'>¡Los quiero!</button>
    </section>
  )
};
export default CoverPage;