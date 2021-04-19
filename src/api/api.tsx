import axios from 'axios';

const instance = axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '9cd2c268-195b-4b42-abcf-5a1644af026e'
    }
})

export const usersAPI = {
    getUsers(currentPage :number, pageSize :number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data)
    },
    // getUsers2 (currentPage :number, pageSize :number)  {
    //     return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
    //         .then(response => response.data)
    // }
}

