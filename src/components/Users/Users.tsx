import React from 'react';
import {v1} from 'uuid';
import {UsersPropsType} from './UsersContainer';
import s from './Users.module.css'


const Users = (props: UsersPropsType) => {

    if (props.users.users.length === 0) {
        props.setUsers([{
            id: v1(),
            photo: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
            followed: true,
            fullName: 'Alex',
            status: 'I am cool!!!',
            location: {city: 'Minsk', country: 'Belarus'}
        },
            {
                id: v1(),
                photo: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
                followed: false,
                fullName: 'Maksim',
                status: 'Do do do',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: v1(),
                photo: 'https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg',
                followed: true,
                fullName: 'Vitold',
                status: 'Po po po',
                location: {city: 'Minsk', country: 'Belarus'}
            }],)
    }

    return <div>
        {
            props.users.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photo} alt={'image'} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>UnFollow</button>
                            : <button onClick={() => {props.follow(u.id)}}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }

    </div>
}

export default Users