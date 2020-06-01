import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../Preloader/Preloader.js';
import ProfileStatus from '../ProfileStatus/ProfileStatus';
import { Redirect } from 'react-router-dom';
import ProfileStatusHooks from '../ProfileStatus/ProfileStatusHooks';
import userphotoDefault from '../../../assets/avadef.jpg';
import ProfileDataFormReduxForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false);
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
    const avatarChange = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.saveDataProfile(formData);
        setEditMode(false);
    }
    return ( 
    <div className={s.profileContent}>
        <div className={s.mainContent}>
            <div className={s.profileInfo}>

                    <div className={s.profilePhoto}>
                        <img className={s.profileAvatar} src={props.profile.photos.large || userphotoDefault}/>

                        <div className={s.addPhoto}>
                            { props.isOwner && <input type={"file"} onChange={avatarChange}/>}
                        </div>
                    </div>


                    <div className={s.profileDescription}>
                        <div className={s.nameBlock}>
                            <h1 className={s.pageName}>{props.profile.fullName}</h1>
                            <ProfileStatusHooks status={props.status} updateStatus={props.updateStatus}/>
                        </div>
                        {editMode
                            ? <ProfileDataFormReduxForm initialValues={props.profile} profile={props.profile} onSubmit={onSubmit}/>
                            : <ProfileData profile={props.profile} isOwner={props.isOwner} activateEditMode={() => {setEditMode(true)}}/>
                        }

                    </div>                      
            </div>
        </div>
    </div>

    );
};
const ProfileData = ({profile, isOwner, activateEditMode}) => {
    return <div className={s.profileDescriptionBlock}>
        <div>
            <div>
                <span>Full Name: </span><span className={s.fullname}>{profile.fullName}</span>
            </div>
            <div>
                <span>Birthday:</span><span className={s.birthDay}> 11 may</span>
            </div>
            <div>
                <span>City: </span><span className={s.birthCity}>Karakol</span>
            </div>
            <div>
                <span>Family status: </span><span className={s.married}>Not married</span>
            </div>
            <div>
                <span>Sdat kyrsach: </span><span className={s.sdat}>{profile.lookingForAJob ? 'Yes' : 'No'}</span>
            </div>
            <div>
                <span>Skills: </span><span className={s.skills}>{profile.lookingForAJobDescription}</span>
            </div>
            <div>
                <span>About me: </span><span className={s.about}>{profile.aboutMe}</span>
            </div>
        </div>
        <span>Contacts:
            <div><span>vk: </span><span className={s.vk}>{profile.contacts.vk}</span></div>
            <div><span>github: </span><span className={s.github}>{profile.contacts.github}</span></div>
        </span>
        {isOwner &&
            <div className={s.editDataButton}>
                <button onClick={activateEditMode}>Edit</button>
            </div>
        }

    </div>
}

export default ProfileInfo;