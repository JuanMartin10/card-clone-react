import React, { useState } from 'react';

import ProfileInfo from '../ProfileInfo/ProfileInfo';
import LocationInfo from '../LocationInfo/LocationInfo';

import Button from '../../UI/Button/Button';
import ToogleButton from '../../UI/ToogleButton/ToogleButton';

import { buttons } from '../../../data';

import './Card.css';

const Card = ({ data }) => {
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
                <LocationInfo data={data} hideInfo={hideInfo} />
            </div>
        </div>
    );
};

export default Card;
