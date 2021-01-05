import React from 'react';
import './style/HeroSale.css';

const HeroSale = () => {
    return (
        <div className="hero-sale">
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="sale-breadcrumbs">
                        <li className="sale-breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="sale-breadcrumb-item"><a href="/home">Beneficios</a></li>
                        <li className="sale-breadcrumb-item-active" aria-current="page"><span>Oferta del día</span></li>
                    </ol>
                </nav>
                <h1>Nunca esperaste tanto que llegase un día de la semana</h1>
                <h3>Te traemos descuentos y promociones por días, que MACH ha escogido pensados en  tus gustos.</h3>
            </div>
        </div>
    );
}

export default HeroSale;