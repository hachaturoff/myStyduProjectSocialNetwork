import React from "react";
import MyPosts from "./MyPosts";
import {useDispatch, useSelector} from "react-redux";
import {addPostAC} from "../../../redux/profile-reducer";

function MyPostsContainer() {
    const dispatch = useDispatch()
    const profilePage = useSelector(state => state.profilePage.posts)

    let addPosts = (post) => {
        dispatch(addPostAC(post))
    }


     return   <MyPosts
                postsData={profilePage}
                addPost={addPosts}
                />
    }


export default MyPostsContainer