import React from 'react';
import SideFrame from './SideFrame';
import { connect } from 'react-redux';
import {getAuthUserData} from '../../redux/authReducer';

class SideFrameContainer extends React.Component {
    componentDidMount(){
        this.props.getAuthUserData();
    }
    render() {
        return <SideFrame {...this.props}/>
    }
};

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    };
};

export default connect(mapStateToProps, {
    getAuthUserData
})(SideFrameContainer);