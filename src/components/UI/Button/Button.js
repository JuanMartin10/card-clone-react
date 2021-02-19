import React from 'react';
import './Button.css';

const Button = ({ children, url }) => {
    return (
        <button className='button' onClick={() => window.open(url)}>
            {children}
        </button>
    );
};

export default Button;
