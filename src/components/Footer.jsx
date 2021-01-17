import React from 'react';
import './style/footer.css';
import instagram from '../images/instagram.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import youtube from '../images/you-tube.png';
import linkedin from '../images/linkedin.png';
import logoBci from '../images/logo-bci.png';

const Footer = () => {
    return (
        <div className='containerFooter h-100'>
            <div className='container pt-5'>
                <div className='row mt-5 text-center text-md-left'>
                    <div className='col-md-6 mt-5'>
                        <div className="text-box">
                            <h5>Descarga la App. Regístrate con tus datos. Comienza a disfrutar.</h5>
                        </div>
                        <div className="row text-center text-md-left">
                            <div className="col-12">
                                <span>+56 9</span> <input type="text" placeholder='12345678' className="number-box" />
                            </div>
                            <div className="col-12">
                                <button className='btn-descargar mt-3'> Recibir Link de descarga</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-6 mt-5'>
                        <div className="row text-center text-md-left">
                            <div className="col-md-4">
                                {/* <div className="row">
                            <div className="col-12"> */}
                                <h6>GASTRONOMIA</h6>
                                <h6 className="mb-3 mt-5">SERVICIOS</h6>
                                <p><a href="/mach-services">Delivery</a></p>
                                <p><a href="/mach-services">Salud</a></p>
                                <p><a href="/mach-services/education-discount">Educación</a></p>
                                <p><a href="/mach-services">Transporte</a></p>
                                <p><a href="/mach-services">Viajes</a></p>
                                <p><a href="/mach-services/telephony-discount">Telefonia</a></p>
                            </div>
                            {/* </div>
                    </div> */}
                            <div className="col-md-4">
                                <h6>TIENDAS</h6>
                                <h6 className="mb-3 mt-5">PUNTOS</h6>
                                <p><a href="/points">Canje</a></p>
                                <p><a href="/points">Acumulación</a></p>
                                <p> <a href="/points">Perfiles Mach</a></p>



                            </div>
                            <div className="col-md-4">
                                <h6 className="mb-5">AYUDA</h6>
                                <p><a href="/home">Preguntas frecuentes</a></p>
                                <p><a href="/home">Términos y condiciones</a></p>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="row my-5 text-center text-md-left">
                    <div className="col-md-6 pb-5 pb-md-0">
                        <p>SÍGUENOS</p>
                        <img src={instagram} alt="Instagram" className="mr-3 " />
                        <img src={facebook} alt="Facebook" className="mr-3 " />
                        <img src={twitter} alt="Twitter" className="mr-3 " />
                        <img src={youtube} alt="Youtube" className="mr-3 " />
                        <img src={linkedin} alt="LinkedIn" className="" />
                    </div>
                    <div className="col-md-6 mb-5">
                        <h3>¿Tienes un comercio online? Dale a tus usuarios la manera más fácil de pagar.</h3>
                        <a href="/home" className="">
                            Cobra con MACH pay
                        </a>
                    </div>
                </div>
                <div className="text-center mt-5">
                    <p className="mt-5">
                        ©2020 MACH – DeLogo banco <img src={logoBci} alt="logo-bci" style={{ width: '40px' }} />para todos.  Tu cuenta digital. Es gratis y sin comisiones.
                    </p>
                    <p>
                        Infórmate sobre la garantía estatal de los depósitos en tu banco y las entidades autorizadas para emitir tarjetas de pago en Chile. Revisa quienes se encuentran inscritas en los Registros de Emisores de Tarjetas
                    </p>
                    <p className='mb-0 pb-5'>
                        <a href="http://www.cmfchile.cl/" target="_blank" rel="noreferrer">en www.cmfchile.cl</a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;
