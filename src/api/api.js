import * as axios from "axios";
import {Axios} from "axios";

const instance = Axios({ //
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fcf77b10-718f-4cdd-bd26-367db383bd0d"
    }
})

const usersAPI = {

    getUsers: (currentPage = 1, pageSize = 10) => {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
            withCredentials: true
        })
            .then(response => response.data)
    },

    unfollowUser: (userid) => {
        return instance.delete(`follow/${userid}`)
    },

    followUser: (userid) => {
        return instance.post(`follow/${userid}`)
    },

}

export const profileAPI = {

    getProfile: (userId) => {
        return instance.get(`profile/` + userId)
            .then(response => response.data)
    },

    getStatus: (userId) => {

        return instance.get(`profile/status/` + userId)
            .then(response => response.data)
    },

    updateStatus: (status) => {
        return instance.put(`profile/status`, {status: status})
            .then(response => response.data)
    }
}

export const authAPI = {
    setUserData: () => {
        return instance.get(`auth/me`)
    },

    onSubmitLogin: (formData) => {
        return instance.post(`auth/login`,
            {
                email: formData.login,
                password: formData.password,
                rememberMe: formData.rememberMe
            })
            .then(response => response.data)
    },

    outUserLogin: () => {
        return instance.delete(`auth/login`)
            .then(response => response.data)
    },


}

export default usersAPI

// oleggelo92@tut.by
// MP24309665