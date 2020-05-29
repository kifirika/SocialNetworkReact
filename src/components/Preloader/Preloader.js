import React from 'react';
import preloader from '../../assets/Ripple-1s-150px.svg';
import s from './Preloader.module.css'

let Preloader = (props) => {
    return <div className={s.preloader}>
        <img src={preloader} /> 
    </div>
};

export default Preloader;