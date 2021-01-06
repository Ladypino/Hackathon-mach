import React, { Fragment } from 'react';
import CardMachMaravilloso from './CardMachMaravilloso';
import netflix from '../images/netflix.png';
import spotify from '../images/spotify.png';
import virgin from '../images/virgin.png';
import rappi from '../images/rappi.png';
import starbucks from '../images/starbucks.png';
import medismart from '../images/medismart.png';

const MachMaravilloso = () => {
    return (
        <Fragment>
            <div className="card-container">
                <CardMachMaravilloso />
                <div>
                    <p>MACH Maravilloso</p>
                    <p>Siempre pagas todo con tu tarjeta MACH e invitas a amigos a unirse, así que este ¡maravilloso! perfil es como tú.  </p>
                    <p>Obtén 50% de descuentos </p>
                    <div className="discounts">
                        <img alt="netflix" src={netflix}></img>
                        <img alt="spotify" src={spotify}></img>
                        <img alt="virgin" src={virgin}></img>
                        <img alt="starbucks" src={starbucks}></img>
                    </div>
                    <p>Delivery gratis en 4 compras</p>
                    <div>
                        <img alt="rappi" src={rappi}></img>
                    </div>
                    <p>Copago en servicios</p>
                    <div>
                        <img alt="medismart" src={medismart}></img>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default MachMaravilloso;