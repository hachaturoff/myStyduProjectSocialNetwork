import {authAPI} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'
const OUT_LOGIN = 'OUT_LOGIN'


let initialState = {
    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false,
    onSubmitError: false
    }


const authReducer = ( state = initialState, action) => {
    switch (action.type) {

        case SET_USER_DATA :
            return {
                ...state ,
                ...action.data,
                isAuth: true
            }

        case OUT_LOGIN :
            return {
                ...state ,
                userId: null,
                login: null,
                email: null,
                isAuth: false
            }

        default:
            return state
    }

}

export const setUserDataAC = (userId, login, email) => ({type: SET_USER_DATA, data: {userId, login, email}})
export const outLoginAC = () => ({type: OUT_LOGIN })


//// THUNK CREATOR


export const getUserDataTC = () => { // TODO повторить как работает thunk

    return (dispatch) => {

         return authAPI.setUserData().then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setUserDataAC( id, login, email)) // исправить на userId
            }
        });
    }
}

export const onSubmitLoginTC = (formData) => { // TODO передать login header

    return  (dispatch) => {

         authAPI.onSubmitLogin(formData)
            .then(response => {
                if(response.resultCode === 0) {
                    dispatch(setUserDataAC())
                } else {

                }
            })
        };
}

export const outUserLogTC = () => {

    return  (dispatch) => {

        authAPI.outUserLogin()
        .then(response => {
            if(response.resultCode === 0) {
                dispatch(outLoginAC())
            } else {

            }
        });
    }

}


export default authReducer

// store.getState().auth