import Header from "./Header";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {outUserLogTC} from "../../redux/auth-reducer";


function HeaderContainer() {
    let dispatch = useDispatch()
    let auth = useSelector(state => state.auth)

    let outLogin = () => {
        dispatch(outUserLogTC())
    }


    return (
            <Header
                outLogin={outLogin}
                login={auth.login}
                isAuth={auth.isAuth}
            />
        )
}

export default HeaderContainer