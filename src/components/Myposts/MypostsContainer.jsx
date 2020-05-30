import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../redux/profileReducer';
import Myposts from './Myposts';
import { connect } from 'react-redux';

//переделать в классовую компоненту и заюзать componentDidUpdate

class MypostsContainer extends React.Component {
    state = {
        profile: this.props.profile
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.profile != this.props.profile) {
            this.setState({
                profile: this.props.profile
            })
        }
    }
    render() {
        return <Myposts {...this.props} />
    }
    
};

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody));
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MypostsContainer);
