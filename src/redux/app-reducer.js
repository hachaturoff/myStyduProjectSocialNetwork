import {getUserDataTC} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


let initialState = {
    initialized: false

    }


const initializedSuccess = ( state = initialState, action) => {
    switch (action.type) {

        case INITIALIZED_SUCCESS :
            return {
                ...state ,
                initialized: true
            }


        default:
            return state
    }

}

export const initializedSuccessAC = () => ({type: INITIALIZED_SUCCESS})



//// THUNK CREATOR


export const initializeApp = () => {

    return (dispatch) => {

        let promise = dispatch(getUserDataTC())
        promise.then(() => {

            dispatch(initializedSuccessAC())
        })

    }
}



export default initializedSuccess

// store.getState().auth