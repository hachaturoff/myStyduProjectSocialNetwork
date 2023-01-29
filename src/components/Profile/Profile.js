import ProfileInfo from "./ProfileDescr/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {

    return (
        <div>
            <ProfileInfo
                userPhoto={props.userPhoto}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile