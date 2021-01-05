import React, { Fragment } from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import headerEducation from '../images/headerEducation.jpeg';
import gallery3 from '../images/Gallery/gallery3.jpg'
import './style/EducationDiscount.css';

const EducationDiscount = (props) => {
  return (
      <Fragment>
  <section>
      <div className='CoverPage--ctn'>
        <h1 className='Education-h1'>Ser #MACHLovers tiene su recompensa</h1>
        <h3 className='Education-h3'>En MACH, premiamos tu lealtad con los mejores y más exclusivos beneficios.</h3>
      </div>
      <img className='Education-img-header' src={headerEducation} alt='Portada Mach Beneficios' />
     
    </section>
  <div className='Education-container'>
            <div className='Gastronomy--items'>
                <img className='Education-img' src={gallery3}  alt="House Bar"  />
                <div className='EducationBenefit'>80% Code House</div>
            </div>
            </div>
            </Fragment>
  );
};

export default EducationDiscount;