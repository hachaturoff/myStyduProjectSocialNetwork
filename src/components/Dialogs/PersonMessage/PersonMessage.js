import style from './PersonMessage.module.css';

    function PersonMessage(props) {
        const {message,styl} = props
        return (
            <div className={style.wrapper}>
                <div className={style.item + ' ' + style[styl]}>{message}</div>
            </div>
        )
}

export default PersonMessage