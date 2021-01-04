import React, { Fragment } from 'react';
import average from '../images/average.png'
import loyaltyCard from '../images/loyalty-card.png';
import quality from '../images/quality.png';
import './style/BenefitsResume.css';

const BenefitsResume = () => {
    return (
        <Fragment>
            <h2 className="benefits-title">¿En qué consiste MACH Beneficios?</h2>
            <div className="benefits-container">
                <div>
                    <img alt="Loyalty Card" src={loyaltyCard}></img>
                    <h5>Descuentos </h5>
                    <p>En diferentes categorías, al pagar con MACH o ingresando el cupón al comprar en el comercio.</p>
                </div>
                <div>
                    <img alt="Average" src={average}></img>
                    <h5>Acumulación de puntos </h5>
                    <p>Por cada vez que uses la App, tu tarjeta y recomiendes MACH.</p>
                </div>
                <div>
                    <img alt="Quality" src={quality}></img>
                    <h5>Canje de Puntos </h5>
                    <p>En descuentos, productos y según tu perfil MACH, hasta la posibilidad de Cashback con tus compras.</p>
                </div>
            </div>
        </Fragment>
    );
}

export default BenefitsResume;