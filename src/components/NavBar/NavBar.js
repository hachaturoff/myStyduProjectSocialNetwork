import style from './NavBar.module.css';
import {NavLink} from "react-router-dom";
import SideBar from "./SideBar/SideBar";
import { useSelector} from "react-redux";

function NavBar() {
    const friends = useSelector(state => state.sideBar.friends)

    let activeStyle = {
            color: 'gold',
    };

                return <nav className={style.nav}>

                        <div className={style.item}>
                            <NavLink className={style.link} style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            } to="/profile">Profile</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            } to="/Events">Events</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            } to="/Dialogs">Message</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            } to="/Users">Users</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            } to="/Music">Music</NavLink>
                        </div>
                        <div className={style.item}>
                            <NavLink className={style.link} style={({isActive}) =>
                                isActive ? activeStyle : undefined
                            } to="/News">News</NavLink>
                        </div>


                        <div>
                            <SideBar friends={friends}/>
                        </div>

                    </nav>


}

export default NavBar