import usersAPI from "../api/api"

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

let usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: [...action.users] }
        }
        case CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case TOTAL_USERS: {
            return { ...state, totalUsersCount: action.totalUsers }
        }
        case TOGGLE_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.id]
                    : state.followingInProgress.filter(uId => uId !== action.id)
            }

        }
        default: return state
    }
}


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const CURRENT_PAGE = 'CURRENT_PAGE'
const TOTAL_USERS = 'TOTAL_USERS'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'


export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const page = (currentPage) => ({ type: CURRENT_PAGE, currentPage })
export const setTotalUsers = (totalUsers) => ({ type: TOTAL_USERS, totalUsers })
export const toggleFetching = (isFetching) => ({ type: TOGGLE_FETCHING, isFetching })
export const toggFollowingProgress = (isFetching, id) => ({ type: TOGGLE_FOLLOWING_IN_PROGRESS, isFetching, id })


export const getUserThunkCreator = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleFetching(true))
        const data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(page(currentPage))
            dispatch(toggleFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsers(data.totalCount))
    }
}



export const followThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(toggFollowingProgress(true, userId))
        const resultCode = await usersAPI.postFollow(userId)
            if (resultCode === 0) {
                dispatch(followSuccess(userId))
            }
            dispatch(toggFollowingProgress(false, userId))
    }
}
export const unfollowThunkCreator = (userId) => {
    return async (dispatch) => {
        dispatch(toggFollowingProgress(true, userId))
        const resultCode = await usersAPI.deleteFollow(userId)
            if (resultCode === 0) {
                dispatch(unfollowSuccess(userId))
            }
            dispatch(toggFollowingProgress(false, userId))
    }
}

export default usersReducer