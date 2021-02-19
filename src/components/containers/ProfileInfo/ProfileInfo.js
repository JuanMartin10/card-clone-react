import React from 'react';

import './ProfileInfo.css';

const ProfileInfo = ({ data, hideInfo }) => {
    const { profile, profileDetails, image } = data;

    return (
        <div>
            <div className='avatar'>
                <img src={image} alt={profile[0].name} />
                {profile.map(elm => {
                    return (
                        <div className='avatar-details' key={elm.name}>
                            <h4>{elm.name}</h4>
                            {hideInfo ? (
                                <p>**********</p>
                            ) : (
                                <p>{elm.interactions}</p>
                            )}
                        </div>
                    );
                })}
            </div>
            {profileDetails.map(elm => {
                return (
                    <div className='profile-details' key={elm.title}>
                        <h4>{elm.title}</h4>
                        {hideInfo ? <p>**********</p> : <p>{elm.data}</p>}
                    </div>
                );
            })}
        </div>
    );
};

export default ProfileInfo;
