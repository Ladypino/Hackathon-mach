import React from 'react';
import './style/heroShops.css';

const HeroShops = () => {
    return (
        <div className="hero-shops">
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="shops-breadcrumbs">
                        <li className="shops-breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="shops-breadcrumb-item"><a href="/home">Beneficios</a></li>
                        <li className="shops-breadcrumb-item-active" aria-current="page"><span>Tiendas</span></li>
                    </ol>
                </nav>
                <h1>Nos gusta tu comodidad y que te sientas bien</h1>
                <h3>Por eso te ofrecemos estos descuentos y promociones en tus tiendas favoritas.</h3>
            </div>
        </div>
    );
}

export default HeroShops;