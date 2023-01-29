import style from './Users.module.css';
import UserContainer from "./User/UserContainer";


function Users(props) {

    return (
        <div className={style.user}>
            <div className={style.descr}>Users</div>
            <div className={style.filter}></div>
            <div>
                <UserContainer initialized={props.initialized} />
            </div>
        </div>
    )
}

export default Users