import React from 'react';
import s from './users.module.css';
import userPhoto from '../../assets/avadef.jpg';
import { NavLink } from 'react-router-dom';
import Paginator from "../Paginator/Paginator";

let Users = (props) => {

    return (
        <div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
            <div className={s.allUsersBlock}>
            {

                props.users.map( u => <div className={s.userBlock} key={u.id}>
                    <div className={s.userPhotoBlock}>
                        <NavLink to={'/profile/' + u.id}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.usersPhoto}/>
                        </NavLink>

                    </div>

                    <div className={s.nameBlock}>
                        <NavLink to={'/profile/' + u.id}>
                            <div>{u.name}</div>
                        </NavLink>

                        <i>{u.status}</i>
                    </div>

                    <div className={s.locationBlock}>

                        <div className={s.followButtonBlock}>
                            {u.followed
                                ? <button disabled={ props.followingInProgress.some(id => id === u.id) }
                                onClick={ () => { props.unfollow(u.id) } }>Unfollow</button>
                                : <button disabled={ props.followingInProgress.some(id => id === u.id) }
                                onClick={ () => { props.follow(u.id) } }>Follow</button>
                            }
                        </div>

                    </div>
                </div>
                )

            }
            </div>
            <Paginator currentPage={props.currentPage} onPageChanged={props.onPageChanged}
                       totalUsersCount={props.totalUsersCount} pageSize={props.pageSize}/>
        </div>

    )
};

export default Users;