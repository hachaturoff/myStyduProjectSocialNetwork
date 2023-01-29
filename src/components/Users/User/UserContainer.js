import {useDispatch, useSelector} from "react-redux";
import {
    setCurrentAC,
    setTotalUsersCountAC,
    toggleFollowingProgressAC,
    toggleIsFetchingAC,
    getUsersTC,
    getUnfollowUser,
    getFollowUser,
} from "../../../redux/users-reducer";
import React from "react";
import userPhoto from "../../../assets/images/user.jpg"
import User from "./User";
import Preloader from "../../common/Preloader/Preloader";


function UserContainer() {

    const dispatch = useDispatch()
    const users = useSelector(state => state.usersPage.users)
    const isFetching = useSelector(state => state.usersPage.isFetching)
    const pageSize = useSelector(state => state.usersPage.pageSize)
    const totalUsersCount = useSelector(state => state.usersPage.totalUsersCount)
    const currentPage = useSelector(state => state.usersPage.currentPage)
    const followingInProgress = useSelector(state => state.usersPage.followingInProgress)
    const isAuth = useSelector(state => state.auth.isAuth)
    const initialized = useSelector(state => state.app.initialized)


    let onSetCurrentPage = (page) => {
        dispatch(setCurrentAC(page))
    }

    let onSetTotalUsersCount = (totalUsersCount) => {
        dispatch(setTotalUsersCountAC(totalUsersCount))
    }

    let onToggleIsFetching = (isFetching) => {
        dispatch(toggleIsFetchingAC(isFetching))
    }

    let onToggleFollowingProgress = (isFetching, userId) => {
        dispatch(toggleFollowingProgressAC(isFetching, userId))
    }

    let onGetUsersThunkCreator = (currentPage, pageSize) => {
        dispatch(getUsersTC(currentPage, pageSize))
    }

    let unfollowUser = (userId) => {
        dispatch(getUnfollowUser(userId))
    }

    let followUser = (userId) => {
        dispatch(getFollowUser(userId))
    }


    return (
        <UserAPI
            users={users}
            isFetching={isFetching}
            userPhoto={userPhoto}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            currentPage={currentPage}
            followingInProgress={followingInProgress}
            isAuth={isAuth}
            initialized={initialized}

            onToggleIsFetching={onToggleIsFetching}
            onToggleFollowingProgress={onToggleFollowingProgress}
            onGetUsersThunkCreator={onGetUsersThunkCreator}
            onSetCurrentPage={onSetCurrentPage}
            onSetTotalUsersCount={onSetTotalUsersCount}
            unfollowUser={unfollowUser}
            followUser={followUser}
        />
    )
}

class UserAPI extends React.Component{

    componentDidMount() { // TODO разобратся с componentDidMount, жизненный цикл

        this.props.onGetUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }


    setTotalUsersCount = (totalCount) => {
        this.props.onSetTotalUsersCount(totalCount)
    }

    setCurrentPage = (page) => {
        this.props.onSetCurrentPage(page)
    }

    onPageChanged = (pageNumber) => {
        this.setCurrentPage(pageNumber)

        this.props.onToggleIsFetching(true)
        this.props.onGetUsersThunkCreator(pageNumber, this.props.pageSize)
    }

    render () {

        return <>
            {
                this.props.isFetching
                    ? <Preloader/>
                    : null
            }

            <User
                users={this.props.users}
                userPhoto={this.props.userPhoto}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                isFetching={this.props.isFetching}
                isAuth={this.props.isAuth}
                initialized={this.props.initialized}
                ///
                totalUsersCount={this.props.totalUsersCount}
                onToggleFollowingProgress={this.props.onToggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
                onPageChanged={this.onPageChanged}
                unfollowUser={this.props.unfollowUser}
                followUser={this.props.followUser}
            />
        </>

    }
}



export default UserContainer