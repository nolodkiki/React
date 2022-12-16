import { connect } from "react-redux"
import { page, follow, toggleFetching, setUsers, setTotalUsers, unfollow } from "../../redux/users-reducer."
import Users from './Users'
import React from 'react'
import Preloader from "../common/preloader/Fetching"
import usersAPI from "../../api/api"



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsers(data.totalCount)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.page(pageNumber)
        this.props.toggleFetching(true)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
                this.props.toggleFetching(false)
                this.props.setUsers(data.items)
            })
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
                unfollow={this.props.unfollow}
                follow={this.props.follow}
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
        isFetching: state.usersPage.isFetching
    }
}

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

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    page,
    setTotalUsers,
    toggleFetching
})(UsersContainer)


// " ...если вы передаете в connect вторым аргументом не mapDispatchToProps, а объект с AC, то connect оборачивает ваши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компонента."