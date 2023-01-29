import {Navigate} from "react-router-dom";
import React from "react";



export const withOutAuthRedirect = (Component) => {


    class RedirectComponent extends React.Component {

        render() {

            if (this.props.isAuth)
                return <Navigate to= {'/Profile'}/>
                return <Component {...this.props}/>
            }
    }

    return RedirectComponent

}