import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route, withRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import Login from './components/Login/LoginPage';
import HeaderContainer from './components/Header/HeaderContainer';
import { initializeApp } from './redux/appReducer';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Preloader from './components/Preloader/Preloader';

class App extends Component {
	componentDidMount(){
		this.props.initializeApp();
	}
	render() {
		if (!this.props.initialized) {
			return <Preloader />
		}
		return (
			<div>
				<HeaderContainer />
				<div className='app-main'>
					<Navbar/>
					<div className='mainContent'>
						<Route path='/profile/:userId?' render={ () => <ProfileContainer /> } />
						<Route path='/dialogs' render={ () => <DialogsContainer /> } />
						<Route path='/users' render={ () => <UsersContainer /> } />
						<Route path='/login' render={ () => <Login />} />
					</div>
				</div>
			</div>	
	);
	}
}

const mapStateToProps = (state) => ({
	initialized: state.app.initialized
})
export default compose(
	withRouter,
	connect(mapStateToProps, { initializeApp }))(App);
