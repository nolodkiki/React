import { connect } from "react-redux"
import { toggFollowingProgress, getUserThunkCreator, unfollowThunkCreator, followThunkCreator } from "../../redux/users-reducer."
import Users from './Users'
import React from 'react'
import Preloader from "../common/preloader/Fetching"
import withAuthRedirect from "../hoc/withAuthRedirect"
import { compose } from "redux"



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }



    onPageChange = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }


    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                users={this.props.users}
                followingInProgress={this.props.followingInProgress}
                toggFollowingProgress={this.props.toggFollowingProgress}
                followAT={this.props.followAT}
                unfollowAT={this.props.unfollowAT}
            />
        </>
    }
}




const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default compose(
    connect(mapStateToProps, {
        toggFollowingProgress,
        getUsers: getUserThunkCreator,
        unfollowAT: unfollowThunkCreator,
        followAT: followThunkCreator
    }),
    withAuthRedirect
)(UsersContainer)



// " ...если вы передаете в connect вторым аргументом не mapDispatchToProps, а объект с AC, то connect оборачивает ваши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компонента."


// const MapDispatchToProps = (dispatch) => {
//     return {
//         follow: (userId) => dispatch(followAC(userId)),
//         unfollow: (userId) => dispatch(unfollowAC(userId)),
//         setUsers: (users) => dispatch(setUsersAC(users)),
//         page: (pageNumber) => dispatch(currentPageAC(pageNumber)),
//         setTotalUsers: (totalUsers) => dispatch(totalUsersAC(totalUsers)),
//         toggleFetching: (isFetching) => dispatch(isFetchingAC(isFetching))
//     }
// }

// const AuthRedirectComponent = withAuthRedirect(UsersContainer)


// export default connect(mapStateToProps, {
//     toggFollowingProgress,
//     getUsers: getUserThunkCreator,
//     unfollowAT: unfollowThunkCreator,
//     followAT: followThunkCreator
// })(AuthRedirectComponent)
