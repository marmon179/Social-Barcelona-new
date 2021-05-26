import React from 'react';
import s from './Users.module.scss';
import {InitialStateTypeUser} from '../../redux/users-reducer';
import {Paginator} from '../common/Paginator/Paginator';
import {User} from './User';


export const Users = (props: UsersType) => {

    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
                   onPageChanged={props.onPageChanged}/>
        {
            props.users.users.map((u: any) => <div className={s.wrapper}><User key={u.id}
                                                                               user={u}
                                                                               follow={props.follow}
                                                                               unfollow={props.unfollow}
                                                                               followingInProgress={props.followingInProgress}
            /></div>)


        }
    </div>
}
//types
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