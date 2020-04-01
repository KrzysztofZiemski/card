import React from 'react';

import './Button.scss';

const Button = ({ onClick, className, children }) => {
    console.log(children)
    return (
        <button
            onClick={onClick}
            className={className ? `mainButton ${className}` : 'mainButton'}
        >
            {children}
        </button >
    )
}

export default Button;