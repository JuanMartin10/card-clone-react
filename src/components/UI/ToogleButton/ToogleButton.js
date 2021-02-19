import React from 'react';
import './ToogleButton.css';

const ToogleButton = () => {
    return (
        <>
            <label className='switch'>
                <input type='checkbox' />
                <span className='slider round'></span>
            </label>
            <br></br>
        </>
    );
};

export default ToogleButton;
