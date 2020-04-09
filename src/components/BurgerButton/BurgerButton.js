import React from 'react';
import './BurgerButton.scss';

const Button = ({ onClick, className, children }) => {

    return (
        <button
            onClick={onClick}
            className={className ? `mainButton ${className}` : 'mainButton'} >
            {children}
        </button >
    )
}

export default Button;