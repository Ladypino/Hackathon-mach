import React from 'react';
import imgServicios from '../images/img-servicios.jpeg';
import './style/coverPage.css';

const ServiciosImg = () => {
  return (
    <section>
      <div className='CoverPage--ctn'>
      <h1 className='CoverPage--ctn-h1'>La vida está llena de oportunidades</h1>
        <h3 className='CoverPage--ctn-h3'>Y en MACH queremos brindartelas todas o por lo menos las que más te gustan.</h3>
      </div>
      <img className='CoverPage--img' src={imgServicios} alt='Portada Mach Beneficios' />
    </section>
  )
};
export default ServiciosImg;