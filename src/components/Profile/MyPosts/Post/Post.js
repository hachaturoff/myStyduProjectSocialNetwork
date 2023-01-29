import style from './Post.module.css';

function Post(props) {

    let {name,message,likeCounts} = props

    return (
        <div className={style.post}>
            <div className={style.avaName}>
                <img src="https://i.pinimg.com/originals/e4/80/e7/e480e79830c93799a96c64708a1f3251.jpg" alt=""/>
                <div>
                    {name}
                </div>
            </div>
            <div>
                <div className={style.item}>
                    {message}
                </div>
                <div>
                    <span>like {likeCounts}</span>
                </div>
            </div>
        </div>
    )
}

export default Post