import React from 'react';
import s from './Users.module.scss';
import userPhoto from '../../assets/images/user-male.png';
import {NavLink} from 'react-router-dom';


export const User = ({user, followingInProgress, follow, unfollow}: UsersType) => {
    return (
        <div className={s.wrapper}>

            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : userPhoto} alt={'image'}
                     className={s.userPhoto}/>
            </NavLink>
            <div className={s.wrapperContent}>
                <div className={s.name}>{user.name}</div>
                <div className={s.status}>{user.status}</div>

                {user.followed
                    ? <button disabled={followingInProgress.some((id: number) => id === user.id)}
                              className={s.button}
                              onClick={() => {
                                  unfollow(user.id)
                              }}>UnFollow</button>

                    : <button disabled={followingInProgress.some((id: number) => id === user.id)}
                              className={s.button}
                              onClick={() => {
                                  follow(user.id)
                              }}>Follow</button>}

            </div>

        </div>)
}
//types
export type UsersType = {
    user: any
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    followingInProgress: any
}