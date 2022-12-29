import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

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
            ...acttion.payload
            
        }
        default: return state
    }
}


export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth} })
export const getAuthTC = () => (dispatch) => {
        return authAPI.getAuth().then(response => {
            if(response.data.resultCode === 0) {
                let {id, login, email} = response.data.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        })
        
    }

export const loginTC = (email, password, remeberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, remeberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthTC())
            } else {
                const errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
                dispatch(stopSubmit('login', {_error: errorMessage}))
            }
        })
    }
}

export const logoutTC = () => {
    return (dispatch) => {
        authAPI.logout().then(respons => {
            if (respons.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
    }
}


export default authReducer