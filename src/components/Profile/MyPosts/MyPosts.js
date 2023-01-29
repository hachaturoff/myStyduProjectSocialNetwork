import style from './MyPosts.module.css';
import Post from "./Post/Post.js";
import React from "react";
import PostForm from "../../common/PostForm/PostForm";


function MyPosts(props) {

    let postsElement = props.postsData.map(p => <Post message={p.message} name={p.name} likeCounts={p.likeCounts}/>)

    let onSubmit = (formData) => {
        let {post} = formData
        props.addPost(post)
    }

    return (
        <div className={style.post}>
            <div>My post</div>

            <PostForm onSubmit={onSubmit}/>

            <div className={style.partition}></div>

            <div className={style.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts