const SET_USER_DATA = 'SET_USER_DATA '

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
}

let authReducer = (state = initialState, acttion) => {
    switch(acttion.type) {
        case SET_USER_DATA: return {
            ...state,
            ...acttion.data,
            isAuth: true,
            
        }
        default: return state
    }
}


export const setAuthUserData = (id, login, email) => ({type: SET_USER_DATA, data: {id, login, email} })

export default authReducer