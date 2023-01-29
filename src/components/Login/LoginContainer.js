import React from "react";
import {getUserDataTC, onSubmitLoginTC} from "../../redux/auth-reducer";
import {useDispatch, useSelector} from "react-redux";
import {withOutAuthRedirect} from "../../hoc/withOutAuthRedirect";
import LoginContainerAPI from "./LoginContainerAPI";

let FormAuthRedirectComponent = withOutAuthRedirect(LoginContainerAPI)

function LoginContainer() {
    let dispatch = useDispatch()
    let isAuth = useSelector(state => state.auth.isAuth)

    const getUserData = (userId, login, email) => {
        dispatch(getUserDataTC(userId, login, email))
    }

    let onSubmit = (formData) => {
        dispatch(onSubmitLoginTC(formData))
    }

    return   <FormAuthRedirectComponent
                getUserData={getUserData}
                onSubmit={onSubmit}
                isAuth={isAuth}
            />
}


export default LoginContainer