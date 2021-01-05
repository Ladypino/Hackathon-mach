import React from "react";
import '../components/style/coverPageGastronomy.css';


const CoverPageGastronomy = () => {
  return (
    <div className='Gastronomy'>
      <div>
        <nav aria-label="breadcrumb">
          <ol className="Gastronomy--migas">
            <li className="gastronomy-item"><a href="/home">Home</a></li>
            <li className="gastronomy-item"><a href="/home">Beneficios</a></li>
            <li className="gastronomy-item migas--strong" aria-current="page">Gastronomía</li>
          </ol>
        </nav>
      </div>
      <div className='Gastronomy--ctn' >
        <h1 className='Gastronomy--ctn-h1'>Una rica experiencia siempre se comparte</h1>
        <h3 className='Gastronomy--ctn-h3'>Prepárate para disfrutar los descuentos y promociones en gatronomía que MACH trae para ti.</h3>
      </div>
      {/* <img className='Gastronomy--CoverPage--img' src={coverPage} alt='Portada Mach Beneficios Gastronomía' /> */}
    </div>

  )
};
export default CoverPageGastronomy;