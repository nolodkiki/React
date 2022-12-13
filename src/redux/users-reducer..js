let initialState = {
    users: [ ],
    pageSize: 5,
    totalUsersCount: 1,
    currentPage: 1,
    isFetching: false,
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
            return {...state, currentPage: action.currentPage}
        }
        case TOTAL_USERS: {
            return {...state, totalUsersCount: action.totalUsers}
        }
        case TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFetching}
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

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })
export const currentPageAC = (currentPage) => ({type: CURRENT_PAGE, currentPage})
export const totalUsersAC = (totalUsers) => ({type: TOTAL_USERS, totalUsers})
export const isFetchingAC = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})

export default usersReducer