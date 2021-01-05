import React from 'react';
import './style/buttonGoBack.css';

const ButtonGoBack = (props) => {
    return (
        <button className='Btn--goback'>
            <a href={props.route}>Volver</a>
        </button>
    )
};
export default ButtonGoBack;