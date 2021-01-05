import React, { Fragment } from 'react';


import telefonia from '../images/telefonia.png';

import './style/servicios.css';

import MenuServices from './menuServices';


 

const TelephonyDiscount = () => {
  return  (
      <Fragment>
    <div className='services-page'>
        <div>
          <h1>La vida está llena de oportunidades</h1>
          <h3>Y en MACH queremos brindartelas todas o por lo menos las que más te gustan.</h3>
        </div>
<MenuServices/>
     
     
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="container">
      <div className="row">
        <div className="col-4 my-5">
          <div className="container-Education">
            <img src={telefonia} alt="" className="img-fluid services-images"/>
          </div>
         
        </div>
        </div>
        </div>
        </Fragment>
  )
   
  
};

export default TelephonyDiscount;