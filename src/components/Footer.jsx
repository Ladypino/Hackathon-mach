import React from 'react';
import './style/footer.css';
import instagram from'../images/instagram.png';
import facebook from'../images/facebook.png';
import twitter from'../images/twitter.png';
import youtube from'../images/you-tube.png';
import linkedin from'../images/linkedin.png';




const Footer = () =>{
    return (
<div className= 'containerFooter h-100'>
    <div className='container'>
        <div className='row mt-5 '>
            <div className='col-6 mt-5'> 
                <h5>Descarga la App. Regístrate con tus datos. Comienza a disfrutar.</h5>
                <div className="row">
                  <div className="col-12">
                    <span>+56 9</span> <input type="text" placeholder='12345678'className="number-box"/> 
                  </div>
                  <div className="col-12">
                    <button className='btn-descargar mt-3'> Recibir Link de descarga</button>
                  </div>
                </div>
            </div>
            <div className='col-6 mt-5'>
                <div className="row">
                    <div className="col-4">
                    {/* <div className="row">
                            <div className="col-12"> */}
                        <h6>GASTRONOMIA</h6>
                        <h6 className="mt-3">SERVICIOS</h6>
                     
                            <a href="">Delivery</a>
                            {/* <a href="">Salud</a>
                            <a href="">Educación</a>
                            <a href="">Transporte</a>
                            <a href="">Viajes</a>
                            <a href="">Telefonia</a> */}
                            </div>
                        {/* </div>
                    </div> */}
                    <div className="col-4">
                        <h6>TIENDAS</h6>
                        <h6 className="mt-3">PUNTOS</h6>
                        <a href="">Canje</a>
                        {/* <a href="">Acumulación</a>
                        <a href="">Perfiles Mach</a> */}
                    </div>
                    <div className="col-4">
                        <h6>AYUDA</h6>
                        <a href="">Preguntas frecuentes</a>
                        {/* <a href="">Términos y condiciones</a> */}
                        <h6 className="mt-3">AYUDA</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="row my-5">
            <div className="col-6">
                <p>SÍGUENOS</p>
                <img src={instagram} alt="" className="mr-2 h-40px"/>
                <img src={facebook} alt="" className="mr-2 h-40px"/>
                <img src={twitter} alt="" className="mr-2 h-40px"/>
                <img src={youtube} alt="" className="mr-2 h-40px"/>
                <img src={linkedin} alt="" className="h-40px"/>
            
               
            </div>
            <div className="col-6 mb-5">
                <h3>¿Tienes un comercio online? Dale a tus usuarios la manera más fácil de pagar.</h3>
                <a href="" className="">
                Cobra con MACH pay
                </a>
            </div>
        </div>
        <div className="text-center mt-5">
            <p className="mt-5">
            ©2020 MACH – DeLogo banco BCIpara todos.  Tu cuenta digital. Es gratis y sin comisiones.
            </p>
            <p>
            Infórmate sobre la garantía estatal de los depósitos en tu banco y las entidades autorizadas para emitir tarjetas de pago en Chile. Revisa quienes se encuentran inscritas en los Registros de Emisores de Tarjetas
            </p>
            <a href=""  className="">
            en www.cmfchile.cl
            </a>
        </div>
    </div>

</div>
    )
}

export default Footer;
