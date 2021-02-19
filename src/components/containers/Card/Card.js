import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import ToogleButton from '../../UI/ToogleButton/ToogleButton';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import './Card.css';
import { buttons } from '../../../data';

const Card = ({ data, hidden }) => {
    const [hideInfo, setHideInfo] = useState(false);

    const hideInfoFunction = () => setHideInfo(!hideInfo);

    return (
        <div className='card'>
            <div className='title-container'>
                <div className='title'>
                    <p>Passenger info</p>
                </div>
                <div className='toogle'>
                    <p>Hide information</p>
                    <ToogleButton onClickToogle={() => hideInfoFunction()} />
                </div>
            </div>
            <div className='main'>
                <div className='div-left'>
                    <ProfileInfo data={data} hideInfo={hideInfo} />
                </div>
                <div className='div-right'>
                    {buttons.map(btn => {
                        return (
                            <Button key={btn.alt} url={btn.url}>
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
