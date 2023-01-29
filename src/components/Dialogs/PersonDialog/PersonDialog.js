import style from './PersonDialog.module.css';
import {NavLink} from "react-router-dom";

function PersonDialog(props) {
    let {name, id} = props;

    return (
            <div className={style.item}>
                <div className={style.avatar}>
                    <img src="https://cdn131.picsart.com/329941653033201.jpg" alt=""/>
                </div>
                <NavLink className={style.personDialog} to={"/dialogs/" + id}>{name}</NavLink>
            </div>
    )
}

export default PersonDialog