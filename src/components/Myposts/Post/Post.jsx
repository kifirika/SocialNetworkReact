import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (
    <div className={s.item}>
        <img className={s.postImage} src='https://i.pinimg.com/736x/60/69/d5/6069d5dcde2d621fa89bc32b4108115a.jpg'/>
            <div className={s.textPost}>
                <div>
                    <span className={s.postName}>Salem</span>
                </div>
                <div>
                    <span>{props.message}</span>
                </div>
                
            </div>
        <span>Likes: {props.likes}</span>
    </div>
    )
};

export default Post;