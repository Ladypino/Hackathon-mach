import React from 'react';
import './style/HeroPoints.css';

const HeroPoints = () => {
    return (
        <div className="hero-points">
            <div>
                <nav aria-label="breadcrumb">
                    <ol className="points-breadcrumbs">
                        <li className="points-breadcrumb-item"><a href="/home">Home</a></li>
                        <li className="points-breadcrumb-item"><a href="/home">Beneficios</a></li>
                        <li className="points-breadcrumb-item-active" aria-current="page"><span>Puntos</span></li>
                    </ol>
                </nav>

                {/* <p>Home &gt; Beneficios &gt; <span>Puntos</span></p> */}
                <h1>MACH reconoce tu valor como usuario y te premia</h1>
                <h3>Por eso cada vez que uses nuestra app acumularás puntos que podrás canjear por lo que más te gusta</h3>
            </div>
        </div>
    );
}

export default HeroPoints;