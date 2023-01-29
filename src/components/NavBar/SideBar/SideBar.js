import style from './SideBar.module.css';
import Friend from "./Friend/Friend";

function SideBar(props) {
    let {friends} = props


    let fri = friends.map(item => <Friend name={item.name} ava={item.ava}/>)

    return (
        <div className={style.side}>
            <h2>Friends</h2>
            <div className={style.friends}>
                {fri}
            </div>
        </div>
    )
}

export default SideBar