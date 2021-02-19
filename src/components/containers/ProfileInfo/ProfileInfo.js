import React from 'react';
import './ProfileInfo.css';

const ProfileInfo = () => {
    const profile = [
        { name: 'Nora M. Buchanan', interactions: '4 interactions' },
    ];
    const profileDetails = [
        { title: 'email', data: 'invision@invisionapp.com' },
        { title: 'phone', data: '+144-3412-4422' },
        { title: 'location', data: 'New York, NY' },
    ];
    return (
        <div>
            <div className='avatar'>
                <img src='https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260' />
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
