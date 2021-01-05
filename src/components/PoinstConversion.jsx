import React, { Fragment } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import loyalty from '../images/loyalty.png';
import arrowDown from '../images/arrow-down.png';
import fivePoints from '../images/five-points.png';
import onePoint from '../images/one-point.png';
import insertCard from '../images/insert-card.png';
import exchange from '../images/exchange.png';
import creditCard from '../images/credit-card.png';
import people from '../images/people.png';
import money from '../images/money.png';
import './style/pointsConversion.css';

const PointsConversion = () => {
    return (
        <Fragment>
            <div className="points-conversion-title">
                <h2>¿Cúal es la conversión de puntos MACH?</h2>
                <h4>Cada vez que realices cualquier tipo de actividad con tu tarjeta MACH, estarás acumulando puntos, que luego podrás canjear.</h4>
            </div>
            <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div className="points-slide-container">
                    <div>
                        <p>Usuario nuevo MACH</p>
                        <img alt="loyalty" src={loyalty}></img>
                        <img alt="arrow-down" src={arrowDown}></img>
                        <img alt="five-points" src={fivePoints}></img>
                        <p>Puntos</p>
                        <p>Al descargar la app y unirte a nuestra comunidad de usuarios MACH.</p>
                    </div>
                    <div>
                        <p>Tarjeta física MACH </p>
                        <img alt="insert-card" src={insertCard}></img>
                        <img alt="arrow-down" src={arrowDown}></img>
                        <img alt="five-points" src={fivePoints}></img>
                        <p>Puntos</p>
                        <p>Al solicitar tu tarjeta física MACH desde nuestra app.</p>
                    </div>
                    <div>
                        <p>Compras y Pagos </p>
                        <img alt="credit-card" src={creditCard}></img>
                        <img alt="arrow-down" src={arrowDown}></img>
                        <img alt="five-points" src={fivePoints}></img>
                        <p>Puntos</p>
                        <p>Como puntaje máximo por todas las veces que por mes uses como medio de pago tu tarjeta MACH.</p>
                    </div>
                </div>
                <div className="points-slide-container">
                    <div>
                        <p>Recomendar amigos</p>
                        <img alt="people" src={people}></img>
                        <img alt="arrow-down" src={arrowDown}></img>
                        <img alt="five-points" src={fivePoints}></img>
                        <p>Puntos</p>
                        <p>Como puntaje máximo por todos los amigos que al mes  les recomiendes usar MACH.</p>
                    </div>
                    <div>
                        <p>Envío de dinero al extranjero</p>
                        <img alt="money" src={money}></img>
                        <img alt="arrow-down" src={arrowDown}></img>
                        <img alt="five-points" src={fivePoints}></img>
                        <p>Puntos</p>
                        <p>Como puntaje máximo por cada vez que envíes dinero al extranjero desde la app de MACH.</p>
                    </div>
                    <div>
                        <p>Transferencias MACH </p>
                        <img alt="exchange" src={exchange}></img>
                        <img alt="arrow-down" src={arrowDown}></img>
                        <img alt="one-point" src={onePoint}></img>
                        <p>Punto</p>
                        <p>Por cada vez que hagas transferencias desde la app de MACH.</p>
                    </div>
                </div>
            </Carousel>
        </Fragment>
    );
}

export default PointsConversion;