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
                <h1>Nunca esperaste tanto que llegase un día de la semana</h1>
                <h3>Te traemos descuentos y promociones por días, que MACH ha escogido pensados en  tus gustos.</h3>
            </div>
        </div>
    );
}

export default HeroShops;