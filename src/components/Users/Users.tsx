import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user-male.png';
import {InitialStateTypeUser} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';

export type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: InitialStateTypeUser
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    toggleFollowingProgress: (isFetching: boolean, id: number) => void
    followingInProgress: any
}

export const Users = (props: UsersType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? s.selectedPage : ''}
                             onClick={() => {
                                 props.onPageChanged(p)
                             }}>{p}</span>
            })}
        </div>
        {
            props.users.users.map((u: any) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={'image'}
                             className={s.userPhoto}/>
                            </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some((id: any) => id === u.id)}
                                      onClick={() => {props.unfollow(u.id)}}>UnFollow</button>

                            : <button disabled={props.followingInProgress.some((id: any) => id === u.id)}
                                      onClick={() => {props.follow(u.id)}}>Follow</button>}
                                </div>
                                </span>
                <span>
                                <span>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                                </span>
                                <span>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                                </span>
                                </span>
            </div>)
        }

    </div>
}