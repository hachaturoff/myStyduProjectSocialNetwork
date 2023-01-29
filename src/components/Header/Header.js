import style from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from "../../logo4.png";

function Header(props) { //TODO убрать login , когда залогинен с профиля

    return (
        <header>
            <div className={style.logo}>
                <img className={style.imgl} src={logo} alt="logo"/>
                <h1>FindFriends</h1>
            </div>
            <div> </div>
            <div> </div>
            <div className={style.loginBlock}>
                {props.isAuth
                    ? props.login
                    : <NavLink className={style.login} to={'/login'}>Log In</NavLink>}

                {props.isAuth
                    ? <button onClick={props.outLogin} className={style.logout}>LogOut</button>
                    : null }
            </div>
        </header>
    )
}

export default Header