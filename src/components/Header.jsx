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
                        <img className='Header-logo' src={logoMach} alt='Logo Mach' />
                        <li><a className='Header--ul-1-home' href='/Home'>Home</a></li>
                    </div>
                    <li><a href='/Gastronomia'>Gastronomia</a></li>
                    <li><a href='/Tiendas'>Tiendas</a></li>

                    <li><a href='/Servicios'>Servicios</a>
                        {/* <nav className={ }>
                            <ul>
                                <li ><a href="/foodbank" >Educación</a></li>
                                <li ><a href="/schoolproj">Delivery</a></li>
                                <li ><a href="/schoolproj">Salud</a></li>
                                <li ><a href="/schoolproj">Transporte</a></li>
                                <li ><a href="/schoolproj">Telefonía</a></li>
                                <li ><a href="/schoolproj">Viajes</a></li>
                            </ul>
                        </nav> */}
                    </li>


                    <li><a href='/Puntos'>Puntos</a></li>
                    <li><a href='/Ayuda'>Ayuda</a></li>
                    <DownloadButton />
                </ul>
            </nav>
        </header>
    )
};
export default Header;
