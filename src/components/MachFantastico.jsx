import React, { Fragment } from 'react';
import CardMachFantastico from './CardMachFantastico';
import netflix from '../images/netflix.png';
import spotify from '../images/spotify.png';
import virgin from '../images/virgin.png';
import rappi from '../images/rappi.png';

const MachFantastico = () => {
    return(
        <Fragment>
            <div className="card-container">
                        <CardMachFantastico />
                        <div>
                            <p>MACH Fantástico</p>
                            <p>Sabemos que te gusta pagar todos tus servicios y compras con tu tarjeta MACH, así que este perfil ¡Fantástico! es para ti. </p>
                            <p>Obtén 30% de descuentos </p>
                            <div>
                                <img alt="netflix" src={netflix}></img>
                                <img alt="spotify" src={spotify}></img>
                                <img alt="virgin" src={virgin}></img>
                            </div>
                            <p>Delivery gratis en 3 compras</p>
                            <div>
                                <img alt="rappi" src={rappi}></img>
                            </div>
                        </div>
                    </div>
        </Fragment>
    )
}

export default MachFantastico;