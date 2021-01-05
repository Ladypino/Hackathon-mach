import React from 'react';
import CoverPageGastronomy from '../components/CoverPageGastronomy';
import '../components/style/sushiblue.css';

const SushiBlueGastronomy = () => {
    return (
        <section>
            <CoverPageGastronomy />
            <div className='Gastronomy--items'>
                {/* <img className='Gastronomy--img' src={ } alt="Sushi Blue" /> */}
                <div className='Gastronomy--caption'>20% Sushi Blue</div>
            </div>
        </section>
    )
};

export default SushiBlueGastronomy;