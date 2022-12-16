import { connect } from "react-redux"
import { page, follow, toggleFetching, setUsers, setTotalUsers, unfollow } from "../../redux/users-reducer."
import axios from 'axios'
import Users from './Users'
import React from 'react'
import Preloader from "../common/preloader/Fetching"



class UsersAPI extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(respons => {
                this.props.toggleFetching(false)
                this.props.setUsers(respons.data.items)
                this.props.setTotalUsers(respons.data.totalCount)
            })
    }

    onPageChange = (pageNumber) => {
        this.props.page(pageNumber)
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(respons => {
                this.props.toggleFetching(false)
                this.props.setUsers(respons.data.items)
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
})(UsersAPI)


// " ...если вы передаете в connect вторым аргументом не mapDispatchToProps, а объект с AC, то connect оборачивает ваши AC в функцию-обертку () => store.dispatch(AC) и передаёт в props компонента."