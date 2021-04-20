import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/images/user-male.png';
import {InitialStateTypeUser} from '../../redux/users-reducer';
import {NavLink} from 'react-router-dom';
import axios from 'axios';

export type UsersType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    users: InitialStateTypeUser
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    toggleFollowingProgress: (isFetching: boolean) => void
    followingInProgress: boolean
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
                             onClick={(e) => {
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
                            ? <button disabled={props.followingInProgress}
                                      onClick={() => {
                                          props.toggleFollowingProgress(true)
                                          axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                              withCredentials: true,
                                              headers: {
                                                  'API-KEY': '9cd2c268-195b-4b42-abcf-5a1644af026e'
                                              }
                                          })
                                              .then(response => {
                                                  if (response.data.resultCode === 0) {
                                                      props.unfollow(u.id)
                                                  }
                                                  props.toggleFollowingProgress(false)
                                              })
                                      }}>UnFollow</button>
                            : <button  disabled={props.followingInProgress}
                                onClick={() => {
                                          props.toggleFollowingProgress(true);
                                          axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                              withCredentials: true,
                                              headers: {
                                                  'API-KEY': '9cd2c268-195b-4b42-abcf-5a1644af026e'
                                              }
                                          })
                                              .then(response => {
                                                  if (response.data.resultCode === 0) {
                                                      props.follow(u.id)
                                                  }
                                                  props.toggleFollowingProgress(false)
                                              })


                                      }}>Follow</button>}

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