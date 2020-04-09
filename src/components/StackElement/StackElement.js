import React from 'react';
import './StackElement.scss';

const StackElement = ({ className, children, style }) => {

            return (
                        <div className={`stackComponent ${className}`} style={style}>
                                    <span className='aside'></span>
                                    <span className='aside'></span>
                                    <span className='aside'></span>
                                    <span className='aside'></span>
                                    <span className='main'>{children}</span>
                        </div>
            )
}

export default StackElement;