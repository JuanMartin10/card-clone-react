import React from 'react';
import Button from '../../UI/Button/Button';
import ToogleButton from '../../UI/ToogleButton/ToogleButton';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import './Card.css';
import { buttons } from '../../../data';

const Card = ({ data }) => {
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
                    <ProfileInfo data={data} />
                </div>
                <div className='div-right'>
                    {buttons.map(btn => {
                        return (
                            <Button>
                                <img src={btn.src} alt={btn.alt} />
                            </Button>
                        );
                    })}
                </div>
            </div>
            <div className='location'>
                <h1>location</h1>
            </div>
        </div>
    );
};

export default Card;
