import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Navbar = () => {
    return <nav className={s.nav}>
       
          <div>
          
            <div className={s.nav_item}>
              <img className={s.navIcon} src="https://img.icons8.com/cotton/64/000000/home--v1.png"/>
              <NavLink to='/profile'>Profile</NavLink>
            </div>

            <div className={s.nav_item}>
              <img className={s.navIcon} src="https://img.icons8.com/cotton/64/000000/secured-letter--v1.png"/>
              <NavLink to='/dialogs'>Messages</NavLink>
            </div>

            <div className={s.nav_item}>
              <img className={s.navIcon} src="https://img.icons8.com/cotton/64/000000/news.png"/>
              <NavLink to='#'>News</NavLink>
              </div>
            
            <div className={s.nav_item}>
              <img className={s.navIcon} src="https://img.icons8.com/cotton/64/000000/user-male--v1.png"/>
              <NavLink to='/users'>Users</NavLink>
            </div>
          </div>
          
      </nav>
};

export default Navbar;