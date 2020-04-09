import React from 'react';
import './Button.scss';

const Button = ({ onClick, children, className = '', style }) => {

            return (
                        <button className={`bassicButton ${className}`} onClick={onClick} style={style}>{children} </button>
            )
}

export default Button;