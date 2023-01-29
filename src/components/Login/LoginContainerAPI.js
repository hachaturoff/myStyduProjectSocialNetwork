import React from "react";
import LoginForm from "../common/LoginForm/LoginForm";

class LoginContainerAPI extends React.Component {

    componentDidMount() {
        this.props.getUserData()
    }

    render() {


        return (
            <div>
                <h1>Login</h1>
                <LoginForm
                    isAuth={this.props.isAuth}
                    onSubmit={this.props.onSubmit}
                />
            </div>

        )
    }
}

export default LoginContainerAPI