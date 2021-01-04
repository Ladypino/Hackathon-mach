import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import CardMachFantastico from './CardMachFantastico';
import CardMachMaravilloso from './CardMachMaravilloso';
import CardMachPremium from './CardMachPremium';
import './style/ProfilesResume.css';

const ProfilesResume = () => {
    return (
        <Carousel showStatus={false}>
            <div className="slide-container">
                <h2>Perfiles MACH</h2>
                <h5>Tu fidelidad nos importa, queremos mostrártelo. Descubre los perfiles asociados a beneficios que tenemos pensados en ti y en tu acumulación de puntos MACH. </h5>
                <div className="card-container">
                    <CardMachFantastico />
                    <div>
                        <p>MACH Fantástico</p>
                        <p>Sabemos que te gusta pagar todos tus servicios y compras con tu tarjeta MACH, así que este perfil ¡Fantástico! es para ti. </p>
                        <p>Obtén 30% de descuentos </p>

                    </div>
                </div>
            </div>
            <div className="slide-container">
                <CardMachMaravilloso />
            </div>
            <div className="slide-container">
                <CardMachPremium />
            </div>
        </Carousel>
    )

}

export default ProfilesResume;