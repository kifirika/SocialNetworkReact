import React from 'react';
import s from './FriendList.module.css'
import friend from '../../../assets/avadef.jpg'

const FriendList = (props) => {
    return (
        <div className={s.friendListBlock}>
            <span>Friends</span>
            <div className={s.friendsList}>
                <img className={s.friendDefault} src={friend}/>
                <img className={s.friendDefault} src={friend}/>
                <img className={s.friendDefault} src={friend}/>
                <img className={s.friendDefault} src={friend}/>
                <img className={s.friendDefault} src={friend}/>
                <img className={s.friendDefault} src={friend}/>
            </div>
        </div>
    )
};

export default FriendList;