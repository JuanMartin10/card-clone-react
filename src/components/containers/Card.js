import React from 'react';
import Button from '../UI/Button/Button';
import ToogleButton from '../UI/ToogleButton/ToogleButton';
import './Card.css';

const Card = () => {
    return (
        <div className='card'>
            <div className='title-container'>
                <div className='title'>
                    <p>Passenger info</p>
                </div>
                <div className='toogle'>
                    <p>Hide information</p>
                    <ToogleButton />
                </div>
            </div>
            <div className='main'>
                <div className='div-left'>
                    <h5>Profile</h5>
                </div>
                <div className='div-right'>
                    <Button>
                        <img src='http://www.pngall.com/wp-content/uploads/2016/03/Paypal-Black-Logo-PNG.png' />
                    </Button>
                    <Button>
                        <img src='https://logodix.com/logo/1153467.png' />
                    </Button>
                    <Button>
                        <img src='https://www.pikpng.com/pngl/b/208-2087508_mastercard-logo-png-mastercard-logo-black-transparent-clipart.png' />
                    </Button>
                    <Button>
                        <img src='https://www.pikpng.com/pngl/b/359-3596858_free-png-apple-pay-logo-png-png-images.png' />
                    </Button>
                </div>
            </div>
            <div className='location'>
                <h1>location</h1>
            </div>
        </div>
    );
};

export default Card;
