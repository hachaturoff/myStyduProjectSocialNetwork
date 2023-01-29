import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

function ProfileInfo(props) {

    if(!props.profile) {
        return <Preloader/>
    }

    return (
        <div>

            <div className={style.profiledescr}>

                <div className={style.avatar}>
                    <img src={props.profile.photos.large || props.userPhoto} alt=""/>
                </div>
                <div className={style.descr}>
                    {props.profile.fullName}<br/>
                    <ProfileStatus
                        status={props.status}
                        updateStatus={props.updateStatus}
                    />
                </div>

            </div>
        </div>
    )
}

export default ProfileInfo