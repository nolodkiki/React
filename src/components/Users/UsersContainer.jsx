import { connect } from "react-redux"
import { currentPageAC, followAC, setUsersAC, totalUsersAC, unfollowAC } from "../../redux/users-reducer."
import Users from "./Users"
import * as axios from 'axios'

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const MapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => dispatch(followAC(userId)),
        unfollow: (userId) => dispatch(unfollowAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users)),
        page: (pageNumber) => dispatch(currentPageAC(pageNumber)),
        setTotalUsers: (totalUsers) => dispatch(totalUsersAC(totalUsers))
    }
}

const UsersContainer = connect(mapStateToProps,MapDispatchToProps)(Users)

export default UsersContainer