import React from 'react';
import './style/download.css';
import phoneMockup1 from '../images/Phone-Mockup-1.png';
import phoneMockup2 from '../images/Phone-Mockup-2.png';
import appstore from '../images/app-store.png';
import googleplay from '../images/google-play.png';
import appgallery from '../images/app-gallery.png';

const Download = () => {
    return (
        <section className='Download'>
            <div style={{ paddingTop: '61.5px' }}>
                <div className='Download--ctn'>
                    <h1>Más de 2,8 millones de personas confían en nosotros</h1>
                    <p className='p1'>Descarga la App. Regístrate con tus datos y haz MACH con todas las oportunidades que te ofrecemos.</p>
                </div>
                <div className='Download--icons'>
                    <a href="https://play.google.com/store/apps/details?id=cl.bci.sismo.mach&hl=en&gl=US" target="_blank" without rel="noreferrer">
                        <img className='Dowload--icons--img' src={googleplay} alt="Google Play" />
                    </a>
                    <a href="https://apps.apple.com/cl/app/mach-compra-paga-comparte/id1262116570" target="_blank" without rel="noreferrer">
                        <img className='Dowload--icons--img' src={appstore} alt="App Store" />
                    </a>
                    <a href="https://appgallery.huawei.com/#/app/C101242163">
                        <img className='Dowload--icons--img' src={appgallery} alt="App Gallery" target="_blank" without rel="noreferrer" />
                    </a>
                </div>
                <p className='p2'>Asegúrate de tener a mano tu cédula de identidad vigente. <br />Debes ser mayor de 18 años.</p>
            </div>
            <div>
                <img className='Download--mockup' src={phoneMockup1} alt='Phone Mockup 1' />
                <img className='Download--mockup Download--mockup2' src={phoneMockup2} alt='Phone Mockup 2' />
            </div>
        </section>
    )
};
export default Download;