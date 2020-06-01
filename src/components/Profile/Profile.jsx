import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MypostsContainer from '../Myposts/MypostsContainer';
import FriendList from './FriendList/FriendList';
import s from './Profile.module.css'

const Profile = (props) => {
debugger
    return ( 
    <div>
        <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} saveDataProfile={props.saveDataProfile} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
        <div className={s.friendsPostsBlock}>
            <FriendList />
            <MypostsContainer profile={props.profile}/>  
        </div>
        
    </div>
    )
};

export default Profile;