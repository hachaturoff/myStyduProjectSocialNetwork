import style from './Events.module.css';
import Hobbies from "./Hobbies/Hobbies";
import Event from "./Event/Event";

function Events() {
    return (
        <div className={style.event}>
            <div>
                <Hobbies/>
                <Event/>
            </div>
            <div>Chat</div>
        </div>
    )
}

export default Events