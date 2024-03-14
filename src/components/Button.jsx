import React from 'react';


import buttonStyles from './Button.module.css'

const Button = ({handleClick,label}) => {
    return (

            <button className={buttonStyles.button} onClick={handleClick}>{label}</button>
    );
}

export default Button;
