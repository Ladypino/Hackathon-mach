import React from 'react';
import starbucksCup from '../images/starbucks-cup.png';
import ButtonGoBack from './ButtonGoBack';
import './style/saleDay.css';

const SaleDay = () => {
    return (
        <div className="sale-day-container">
            <div className="sale-day-picture-container">
                <div>
                    <img alt="starbucks-cup" src={starbucksCup}></img>
                    <p>50% Starbucks</p>
                </div>
            </div>
            <div className="sale-day-info">
                <h4>Beneficio Viernes día de Starbucks </h4>
                <p>Un café es el mejor mejor compañero para comenzar un gran viernes. Disfuta de esta gran experiencia MACH.</p>
                <p>Pasos a seguir</p>
                <p>Este descuento se activará automáticamente al escoger tu tarjeta MACH como medio de pago en el local.</p>
                <p>Debes saber</p>
                <ol>
                    <li>Promoción válida hasta el 31 de Enero de 2021.</li>
                    <li>No acumulable con otras promociones ni beneficios.</li>
                    <li>Valido para café y frappuccinos tamaño venti.</li>
                </ol>
                <ButtonGoBack route='/home' />
            </div>
        </div>
    )
}

export default SaleDay;