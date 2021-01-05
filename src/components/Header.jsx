import React from 'react';
import logoMach from '../images/logo-mach.png';
import DownloadButton from './DownloadButton';
import './style/header.css'

const Header = () => {

  return (
    <header>
      <nav>
        <ul className='Header--list'>
          <div className='Header--ul-1'>
            <a href="https://www.somosmach.com/"><img className='Header-logo' src={logoMach} alt='Logo Mach' /></a>
            <li><a className='Header--ul-1-home' href='/Home'>Beneficios</a></li>
          </div>
          <li><a className='Header--ul-2' href='/gastronomy'>Gastronomía</a></li>
          <li><a className='Header--ul-2' href='/shops'>Tiendas</a></li>
          <li><a className='Header--ul-2' href='/mach-services'>Servicios</a></li>

          {/* <div className="dropdown">
            <a className="dropdown-toggle Header--ul-2" href="/mach-service" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Services</a> */}

          {/* <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <li className="dropdownlist"><a href="/mach-service/education">Educación</a></li>
              <li className="dropdownlist"><a href="/mach-service/delivery">Delivery</a></li>
              <li className="dropdownlist"><a href="/mach-service/health">Salud</a></li>
              <li className="dropdownlist"><a href="/mach-service/transport">Transporte</a></li>
              <li className="dropdownlist"><a href="/mach-service/telephony">Telefonía</a></li>
              <li className="dropdownlist"><a href="/mach-service/travels">Viajes</a></li>
            </div> */}
          {/* </div> */}

          <li><a className='Header--ul-2' href='/points'>Puntos</a></li>
          <li><a className='Header--ul-2 help' href='/help'>Ayuda</a></li>
          <DownloadButton />
        </ul>
      </nav>
    </header >
  )
};
export default Header;
