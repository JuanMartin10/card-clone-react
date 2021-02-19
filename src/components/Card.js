import React from 'react';
import Button from './Button';

const Card = () => {
    return (
        <div className='card'>
            <div className='title-container'>
                <div className='title'>
                    <p>Passenger info</p>
                </div>
                <div className='toogle'>Hide information</div>
            </div>
            <div className='main'>
                <div className='div-left'>
                    <h5>Profile</h5>
                </div>
                <div className='div-right'>
                    <Button>Paypal</Button>
                    <Button>Paypal</Button>
                    <Button>Paypal</Button>
                    <Button>Paypal</Button>
                </div>
            </div>
            <div className='location'>
                <h1>location</h1>
            </div>
        </div>
    );
};

export default Card;
