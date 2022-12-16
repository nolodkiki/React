const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postData: [
        { message: 'BTS', id: '1', likes: '893K' },
        { message: 'Army', id: '2', likes: '1.2M' },
    ],
    newPostText: 'хуй',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            // let newPost = {
            //     message: state.newPostText,
            //     id: 3,
            //     likes: 0
            // }
            // let stateCopy = {...state}
            // stateCopy.postData = [...state.postData]
            // stateCopy.postData.push(newPost)
            // stateCopy.newPostText = ''
            // return stateCopy
            return {
                ...state,
                newPostText: '',
                postData: [...state.postData, {message: state.newPostText, id:3, likes: 0}]
            }
        case UPDATE_NEW_POST_TEXT: {
            // let stateCopy = {...state}
            // stateCopy.newPostText = action.newText
            // return stateCopy
            return {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return{...state, profile: action.profile}
        }
        default: 
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const UpdateNewPosttextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = profile => ({type: SET_USER_PROFILE, profile})

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
