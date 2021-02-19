import React from 'react';

import './LocationInfo.css';

const LocationInfo = ({ data, hideInfo }) => {
    const { streetInfo, locationInfo } = data;

    return (
        <>
            <div className='up-div'>
                {streetInfo.map(elm => {
                    return (
                        <div>
                            <div>
                                <img src={elm.icon} />
                            </div>
                            <div>
                                {hideInfo ? (
                                    <p>**********</p>
                                ) : (
                                    <p>{elm.city}</p>
                                )}
                                {hideInfo ? (
                                    <p>**********</p>
                                ) : (
                                    <h4>{elm.street}</h4>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
            <hr></hr>
            <div className='down-div'>
                {locationInfo.map(elm => {
                    return (
                        <div className='grid-item'>
                            {hideInfo ? <p>***</p> : <p>{elm.data}</p>}
                            <h4>{elm.title}</h4>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default LocationInfo;
