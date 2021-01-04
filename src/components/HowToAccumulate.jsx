import React, {Fragment} from 'react';
import creditCard from '../images/credit-card.png';
import money from '../images/money.png';
import people from '../images/people.png';
import './style/howToAccumulate.css';

const HowToAccumulate = () => {
    return (
        <Fragment>
            <h2 className="howTo-title">¿Cómo acumulo puntos MACH?</h2>
            <div className="howTo-container">
                <div>
                    <img alt="credit-card" src={creditCard}></img>
                    <h5>Pagando con tu Tarjeta MACH</h5>
                    <p>Cada vez que uses tu tarjeta física o virtual MACH, para pagar servicios, hacer transferencias y adquirir seguro. </p>
                </div>
                <div>
                    <img alt="credit-card" src={people}></img>
                    <h5>Recomendando Amigos</h5>
                    <p>Cada vez que le recomiendes a tus amigos unirse a MACH, ganas dinero y además acumulas puntos.</p>
                </div>
                <div>
                    <img alt="credit-card" src={money}></img>
                    <h5>Enviando dinero al extranjero </h5>
                    <p>Siempre que envíes dinero al extranjero, nosotros te obsequiaremos puntos para acumular y luego canjear.</p>
                </div>
            </div>
        </Fragment>
    );
}

export default HowToAccumulate;