import Profile from "./Profile";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getUserStatusTC, getUserTC,
    updateStatusTC
} from "../../redux/profile-reducer";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import userPhoto from "../../assets/images/user.jpg"
import {getAuth, getProfile, getStateStatus} from "../../redux/userSelector";



function ProfileContainer() {
    const dispatch = useDispatch()
    const profile = useSelector(state => getProfile(state))
    const isAuth = useSelector(state => getAuth(state))
    const status = useSelector(state => getStateStatus(state))
    let initialized = useSelector(state => state.app.initialized)


    let getUser = (profile) => {
        dispatch(getUserTC(profile))
    }

    let getStatus = (userId) => {
        dispatch(getUserStatusTC(userId))
    }

    let updateStatus = (status) => {
        dispatch(updateStatusTC(status))
    }

    return <ComponentWithRouterProp
        getUser={getUser}
        getStatus={getStatus}
        updateStatus={updateStatus}
        status={status}
        profile={profile}
        isAuth={isAuth}
        initialized={initialized}
        userPhoto={userPhoto}
    />
}
////////////////////////////////////////////////////////

function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();

    return (
        <ProfileApiContainer
            {...props}
            router={{ location, navigate, params }}
        />
    );
}
//////////////////////////////////////////////////////



class ProfileApiContainer extends React.Component{
    componentDidMount() {

        let userId = this.props.router.params.userId ;
        if (!userId) { // TODO сделать что бы рабоатла страница с моим профилем
            userId = 25696;
        }

        this.props.getUser(userId)
        this.props.getStatus(userId)

    }

    render() {

        return (
            <div>
                <ProfileAuthRedirectComponent
                    {...this.props}
                    updateStatus={this.props.updateStatus}
                    status={this.props.status}
                    profile={this.props.profile}/>
            </div>
        )}

}

///////////////////////////////////////////////////////////////////////////


let ProfileAuthRedirectComponent = withAuthRedirect(Profile)


export default ProfileContainer