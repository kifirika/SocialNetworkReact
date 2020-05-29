import React, { useState } from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';

const Header = (props) => {

    return (
		<div className={s.headerBlock}>
			<div>
			{
			props.isAuth ? 
			<div className={s.loginBlock}>				
					{!props.profile &&
						<span>No photo</span>
					}
					{props.profile &&
					<div>
						<img className={s.miniAvaLoginBlock} src={props.profile.photos.small}/>
					</div>	
					}
					{props.login}
				<div>
					<button className={s.loginButton} onClick={props.logout}>Logout</button>
				</div>
			</div>  
			: <NavLink to={'/login'}>Login</NavLink>
			}	
			{/* <div className={s.authProfileAva}>
                <img className={s.authProfileAvaImg} src={props.profile.photos.large}/>
            </div> */}
    		</div>
			
		</div>
	)
};

export default Header;