import React from 'react';
import CoverPageGastronomy from '../components/CoverPageGastronomy';
import '../components/style/sushiblue.css';
import sushiblue from '../images/sushi.png';
import Starbuks from '../images/starbuks.png';
import Rappi from '../images/rappi.jpg';
import HouseBar from '../images/house-bar.jpg';
import ButtonGoBack from '../components/ButtonGoBack';

const SushiBlueGastronomy = () => {
    return (
        <section>
            <CoverPageGastronomy />
            <div className='Gastronomy--item'>
                <div>
                    <img className='sushiblue--img' src={sushiblue} alt="Sushi Blue" />
                    <div className='Gastronomy--caption--item'>20% Sushi Blue</div>
                </div>
                <div className='Gastronomy--description'>
                    <h4 className='description--title'>Beneficio Sushi House exclusivo MACH</h4>
                    <p className='p1'>El sushi más rico de Chile llegó para quedarse. Anímate a salir de la rutina y disfrutar de sus exquisitos platos.</p>
                    <strong className='strong'>Pasos a seguir</strong>
                    <p className='p1'>Este descuento se activará automáticamente al escoger tu tarjeta MACH como medio de pago en el local.</p>
                    <span className='description--about'>Debes saber</span>
                    <p className='p2'>1. Promoción válida hasta el 31 de Enero de 2021. <br />
                    2. No acumulable con otras promociones ni beneficios.</p>
                    <ButtonGoBack route='/gastronomy' />
                </div>
            </div>
            <h2 className='explore--title'>También podría interesarte</h2>

            <div className='explore-container'>
                <div className='Gastronomy--items'>
                    <img className='Gastronomy--img' src={HouseBar} alt="House Bar" />
                    <div className='Gastronomy--caption2'>Delivery Gratis House Bar</div>
                </div>
                <div className='Gastronomy--items'>
                    <img className='Gastronomy--img' src={Rappi} alt="Rappi" />
                    <div className='Gastronomy--caption'>Delivery Gratis Rappi</div>
                </div>
                <div className='Gastronomy--items'>
                    <img className='Gastronomy--img' src={Starbuks} alt="Starbuks" />
                    <div className='Gastronomy--caption2'>50% Starbuks</div>
                </div>
            </div>
        </section>
    )
};

export default SushiBlueGastronomy;