import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import {getAuthUserData, logout} from '../../redux/authReducer';
import { getUserProfile } from '../../redux/profileReducer';

class HeaderContainer extends React.Component {
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
        return <Header {...this.props} />
    }
    
};

let mapStateToProps = (state) => {

    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        profile: state.profilePage.profile
    };
    
};

export default connect(mapStateToProps, {
    getUserProfile,
    getAuthUserData,
    logout
})(HeaderContainer);