import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = ({ data }) => {
    const { profile, profileDetails, image } = data;

    return (
        <div>
            <div className='avatar'>
                <img src={image} alt={profile[0].name} />
                {profile.map(elm => {
                    return (
                        <div className='avatar-details'>
                            <h4>{elm.name}</h4>
                            <p>{elm.interactions}</p>
                        </div>
                    );
                })}
            </div>
            {profileDetails.map(elm => {
                return (
                    <div className='profile-details'>
                        <h4>{elm.title}</h4>
                        <p>{elm.data}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default ProfileInfo;
