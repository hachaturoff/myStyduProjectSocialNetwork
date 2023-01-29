import style from "./User.module.css";
import React from "react";
import { NavLink} from "react-router-dom";


let User = (props) => {

    // карусель для номера страниц
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    let curP = props.currentPage; // карусель для номера страниц
    let curPF = ((curP - 4) < 0) ?  0  : curP - 4 ;
    let curPL = curP + 4;
    let slicedPages = pages.slice( curPF, curPL);


    return (<div>
        {/*карусель страниц*/}
        <div className={style.numberPage}>
            {slicedPages.map(p => {
                return (
                    <span className={props.currentPage === p && style.selectedPage} onClick={   (e) => {
                        props.onPageChanged(p)
                        }}>
                            {p}
                    </span>)
            })}
        </div>
        {/*карусель страниц*/}

        {
            props.users.map(user =>
                <div key={user.id} className={style.wrapper}>

                    <div className={style.avaAndButon}>

                        <NavLink to={'/Profile/' + user.id}>
                            <img className={style.avatar}
                                 src={user.photos.small !== null ? user.photos.small : props.userPhoto}alt=""
                            />
                        </NavLink>

                        {
                            user.followed

                                ? <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {
                                    props.onToggleFollowingProgress(true, user.id)

                                    props.unfollowUser(user.id) // thunkCreator

                                    }}>Unfollow
                                </button>

                                : <button disabled={props.followingInProgress.some(id => id === user.id)} onClick={() => {

                                    props.onToggleFollowingProgress(true, user.id)

                                    props.followUser(user.id) // thunkCreator

                                    }}>Follow
                                </button>
                        }

                    </div>

                    <div className={style.descr}>
                        <div className={style.name}>{user.name}</div>
                    </div>

                    <div>
                        <div className={style.city}>{user.city}</div>
                        <div className={style.status}>{user.status}</div>
                    </div>

                </div>
            )
        }

        {/*карусель страниц*/}
        <div className={style.numberPage}>

            {
                slicedPages.map(p => {
                    return (
                        <span className={props.currentPage === p && style.selectedPage} onClick={(  e) => {
                            props.onPageChanged(p)
                            }}>{p}
                        </span>)
                })
            }

        </div>
        {/*карусель страниц*/}

    </div>)
}

export default User