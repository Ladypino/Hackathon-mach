import React from "react";
import coverPage from '../images/coverpage-gastronomy.jpg';
import '../components/style/coverPageGastronomy.css';


const CoverPageGastronomy = () => {
    return (
        <section>
            <div className='Gastronomy--CoverPage--ctn'>
                <p>Home > Beneficios > Gastronomía</p>

                <h1 className='Gastronomy--CoverPage--ctn-h1'>Una rica experiencia siempre se comparte</h1>
                <h3 className='Gastronomy--CoverPage--ctn-h3'>Prepárate para disfrutar los descuentos y promociones en gatronomía que MACH trae para ti.</h3>
            </div>
            <img className='Gastronomy--CoverPage--img' src={coverPage} alt='Portada Mach Beneficios Gastronomía' />
        </section>
    )
};
export default CoverPageGastronomy;