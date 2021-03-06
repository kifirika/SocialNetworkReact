import React from 'react';
import s from './Profile.module.css'
import { useState, useEffect } from 'react';

const ProfileStatusHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    };
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };
        return (
            <div>
                { !editMode &&
                    <div>
                        <span onClick={ activateEditMode }>{props.status || 'No status'}</span>
                    </div>
                }
                { editMode &&
                    <div>
                        <input onChange={ onStatusChange} autoFocus={true} onBlur={ deactivateEditMode } value={ status }></input>
                    </div>
                }
                
            </div>
        )
}

export default ProfileStatusHooks;