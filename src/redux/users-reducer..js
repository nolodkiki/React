let initialState = {
    users:
        [
            { id: 1, photo: 'https://st1.bollywoodlife.com/wp-content/uploads/2021/08/Jungkook-meme-worthy-expressions-pics1.png', follow: true, name: 'Jungkook', city: 'Seoul', country: 'South Korea', message: 'Party Party Yeah' },
            { id: 2, photo: 'https://st1.bollywoodlife.com/wp-content/uploads/2021/08/Jungkook-meme-worthy-expressions-pics1.png', follow: false, name: 'Namjoon', city: 'Seoul', country: 'South Korea', message: 'RRRRRRRAP MONSTA' },
            { id: 3, photo: 'https://st1.bollywoodlife.com/wp-content/uploads/2021/08/Jungkook-meme-worthy-expressions-pics1.png', follow: true, name: 'Taehyung', city: 'Seoul', country: 'South Korea', message: 'Party Party Yeah' },
            { id: 4, photo: 'https://st1.bollywoodlife.com/wp-content/uploads/2021/08/Jungkook-meme-worthy-expressions-pics1.png', follow: false, name: 'Yoon', city: 'Seoul', country: 'South Korea', message: 'Party Party Yeah' },
            // {id: 5, name: 'Jimin', city: 'Seoul', country: 'South Korea', message: 'Party Party Yeah'},
            // {id: 6, name: 'Hosok', city: 'Seoul', country: 'South Korea', message: 'Party Party Yeah'},
            // {id: 7, name: 'Jin', city: 'Seoul', country: 'South Korea', message: 'Party Party Yeah'}
        ]
}

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW: {
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, follow: true }
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
                        return { ...u, follow: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return { ...state, users: [...state.users, ...action.users] }
        }
        default: return state
    }
}

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export const followAC = (userId) => ({ type: FOLLOW, userId })
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId })
export const setUsersAC = (users) => ({type: SET_USERS, users })

export default usersReducer