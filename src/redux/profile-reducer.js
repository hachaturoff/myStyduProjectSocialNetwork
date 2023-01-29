import {profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';

let initialState = { //
    posts:
        [
            {id: 1, name: 'Oleg', message: 'hi, mani', likeCounts: 0},
            {id: 2, name: 'Timur', message: 'Yu Bro, where my Money, hay a you', likeCounts: 23},
            {id: 3, name: 'Oly', message: 'mmm, you so sexy', likeCounts: 456}
        ],
    newPostText: '',
    profile: null ,
    status: "ssss",
}

const profileReducer = ( state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, {id: 35, message: action.value, likeCounts: 0 }]}

        case SET_USER_PROFILE:
            return {
                ...state,
                profile : action.profile }

        case SET_USER_STATUS:
            return {
                ...state,
                status : action.status }

        default:
            return state
    }
}

export const addPostAC = (post) => ({ type: ADD_POST , value: post})
export const setUserProfileAC = (profile) => ( { type: SET_USER_PROFILE,profile })
export const setUserStatusAC = (status) => ({ type: SET_USER_STATUS, status })

//// THUNK CREATOR


export const getUserTC = (userId) => {

    return (dispatch) => {

        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfileAC(data))
            });
    }
}

export const getUserStatusTC = (userId) => {

    return (dispatch) => {

        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setUserStatusAC(data))
            });
    }
}

export const updateStatusTC = (status) => {

    return (dispatch) => {
        profileAPI.updateStatus(status)
            .then(response => {
                if(response.resultCode === 0) {
                    dispatch(setUserStatusAC(status))
                }
            });
    }
}

export default profileReducer