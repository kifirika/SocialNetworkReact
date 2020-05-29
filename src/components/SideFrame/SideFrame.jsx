import React from 'react';
import s from './SideFrame.module.css';
import { NavLink } from 'react-router-dom';

const SideFrame = (props) => {
    return <div className={s.loginBlock}>
	    {
	     props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>
	    }
      	
    	</div>
};

export default SideFrame;