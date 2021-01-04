import React, {Fragment} from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CardMachFantastico from './CardMachFantastico';
import CardMachMaravilloso from './CardMachMaravilloso';
import CardMachPremium from './CardMachPremium';
import netflix from '../images/netflix.png';
import spotify from '../images/spotify.png';
import virgin from '../images/virgin.png';
import rappi from '../images/rappi.png';
import starbucks from '../images/starbucks.png';
import medismart from '../images/medismart.png';
import sky from '../images/sky.png';
import './style/ProfilesResume.css';

const ProfilesResume = () => {
    return (
        <Fragment>
            <div className="slide-container">
                <h2>Perfiles MACH</h2>
                <h5>Tu fidelidad nos importa, queremos mostrártelo. Descubre los perfiles asociados a beneficios que tenemos pensados en ti y en tu acumulación de puntos MACH. </h5>
            </div>
            <Carousel showStatus={false} showThumbs={false} autoPlay={true} infiniteLoop={true}>
                <div className="slide-container">
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
                </div>
                <div className="slide-container">
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
                </div>
                <div className="slide-container">
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
                </div>
            </Carousel>
        </Fragment>
    )

}

export default ProfilesResume;