import React from 'react';

import './ToogleButton.css';

const ToogleButton = ({ onClickToogle }) => {
    return (
        <div>
            <label className='switch'>
                <input type='checkbox' onClick={onClickToogle} />
                <span className='slider round'></span>
            </label>
            <br></br>
        </div>
    );
};

export default ToogleButton;
