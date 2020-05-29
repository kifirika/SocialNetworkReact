import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader.js';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import { Redirect } from 'react-router-dom';
import ProfileStatusHooks from '../ProfileStatus/ProfileStatusHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    // if (!props.isAuth) { 
    //     return <Redirect to={'/login'}/>
    // }
    // let contacts = [];
    // for (let i = 1; i <= props.profile.contacts.length; i++) {
    //     contacts.push(props.profile.contacts[i]);
    // }
    return ( 
    <div className={s.profileContent}>
        <div className={s.mainContent}>
            <div className={s.profileInfo}>

                    <div className={s.profilePhoto}>
                        <img className={s.profileAvatar} src={props.profile.photos.large}/>
                    </div>

                    <div className={s.profileDescription}>
                        <div className={s.nameBlock}>
                            {/* <h1>Salem Saberhagen</h1> */}
                            <h1 className={s.pageName}>{props.profile.fullName}</h1>
                            <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
                        </div>

                        
                        <div className='profile-description'>
                            <span>Contacts:
                                <div>{props.profile.contacts.vk}</div>
                                <div>{props.profile.contacts.facebook}</div>
                                <div>{props.profile.contacts.twitter}</div>
                                <div>{props.profile.contacts.instagram}</div>
                                <div>{props.profile.contacts.github}</div>
                            </span>
                        </div>
                    </div>                      
            </div>
        </div>
    </div>

    );
};

export default ProfileInfo;