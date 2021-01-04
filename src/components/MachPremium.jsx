import React from 'react';
import CardMachPremium from './CardMachPremium';
import netflix from '../images/netflix.png';
import spotify from '../images/spotify.png';
import virgin from '../images/virgin.png';
import rappi from '../images/rappi.png';
import starbucks from '../images/starbucks.png';
import sky from '../images/sky.png';

const MachPremium = () => {
    return (
        <div className="card-container">
            <CardMachPremium />
            <div>
                <p>MACH Premium</p>
                <p>Eres de los que pagas todo con tu tarjeta MACH, invitas a amigos a unirse, envíaas dinero al extranjero y activaste un seguro, así que este perfil ¡Premium! te queda perfecto. </p>
                <p>Obtén 30% de descuentos </p>
                <div>
                    <img alt="netflix" src={netflix}></img>
                    <img alt="spotify" src={spotify}></img>
                    <img alt="virgin" src={virgin}></img>
                </div>
                <p>Delivery gratis en 4 compras</p>
                <div>
                    <img alt="rappi" src={rappi}></img>
                </div>
                <p>Cashback en tus compras</p>
                <div className="cashback">
                    <img alt="starbucks" src={starbucks}></img>
                    <img alt="sky" src={sky}></img>
                </div>
            </div>
        </div>
    );
}

export default MachPremium;