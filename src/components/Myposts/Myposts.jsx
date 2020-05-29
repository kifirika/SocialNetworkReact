import React from 'react';
import s from './Myposts.module.css';
import Post from './Post/Post';
import { reduxForm, reset, Field } from 'redux-form';



const Myposts = (props) => {
debugger;
    let posts = props.posts.map(post => <Post 
        id={post.id} 
        message={post.message} 
        likes={post.likesCount} 
        key={post.id} 
        // fullName={post.profile.fullName} 
        // smallPhoto={post.profile.photos.small}
        // largePhoto={post.profile.photos.large}
        />);

    let newPost = (value) => { 
        props.addPost(value.newPostBody);
    };

    return <div className={s.mainContentPosts}>
        <AddNewPostFormRedux onSubmit={newPost}/>
        <div className={s.postsBlock}>
            {posts}
        </div>
        
    </div>
};
const afterSubmit = (result, dispatch) => {
    dispatch(reset('newPostForm'));
};
const NewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.areaPlusButton}>
                <img className={s.avaImage} src={'https://i.pinimg.com/736x/60/69/d5/6069d5dcde2d621fa89bc32b4108115a.jpg'}/>
                <Field component='textarea' name='newPostBody' placeholder='Что нового?'/>
                <button><b>+</b></button>
            </div>
        </form>
    )
}
const AddNewPostFormRedux = reduxForm({
    form: 'newPostForm',
    onSubmitSuccess: afterSubmit
})(NewPostForm)

export default Myposts;
