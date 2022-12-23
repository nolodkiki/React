import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_USER_STATUS = 'SET_USER_STATUS'

let initialState = {
    postData: [
        { message: 'BTS', id: '1', likes: '893K' },
        { message: 'Army', id: '2', likes: '1.2M' },
    ],
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postData: [...state.postData, { message: action.newPostText, id: 3, likes: 0 }]
            }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_USER_STATUS: {
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText })
export const setUserProfile = profile => ({ type: SET_USER_PROFILE, profile })
export const setUserStatus = status => ({type: SET_USER_STATUS, status})


export const getProfileThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId).then(data => dispatch(setUserProfile(data)))
    }
}
export const getUserStatusThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId).then(respons => dispatch(setUserStatus(respons.data)))
    }
}
export const updateUserStatusThunkCreator = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status).then(respons => {
            if (respons.data.resultCode === 0) {
            dispatch(setUserStatus(status))
            }
        })
    }
}

export default profileReducer



//Когда возвращаете литеральное выражение объекта, заключите тело в скобки params => ({foo: bar})


    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         message: state.newPostText,
    //         id: 3,
    //         likes: 0
    //     }
    //     state.postData.push(newPost)
    //     state.newPostText = ''
    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText
    // }

    // return state


    // У тебя есть исходный state (который хранится в redux: назовем его redux.state) и state - который возвращает твой reducer, назовем его reducer.state. Функция connect проверяет изменился ли redux.state после того, как прошел через reducer... и выясняет, что изменений нет. Почему? Потому что в reducer на вход передается ссылка на redux.state и когда ты меняешь state внутри reducer'a (reducer.state), то на самом деле - ты меняешь все тот же redux.state по ссылке. В итоге, все измменения, внесенные в reducer.state изменяют и redux.state (потому что они ссылаются на один и тот же объект в памяти, см.предидущее видео). И конечно же в результате проверки connect видит, что redux.state и reducer.state - совпадают, а значит ничего не поменялось.
    // А вот если сделать грамотную копию входящего state, то reducer.state будет работать с отдельным объктом в памяти, изменения которого не затронут redux.state. И при сравнении redux.state и reducer.state - функция connect выяснит, что есть расхождения и надо обнвлять VIRTUAL-DOM -> DOM.
