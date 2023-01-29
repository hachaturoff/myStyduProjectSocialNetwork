import style from './Friend.module.css';

function Friend(props) {
    let {ava, name} = props
    return (
        <div className={style.friend}>
            <div>
                <img src={ava} alt=""/>
            </div>
            <div>{name}</div>
        </div>
    )
}

export default Friend