import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import authReducer from "./auth-reducer"
import dialogReducer from "./dialog-reducer"
import friendsReducer from "./friends-reducer"
import musicReducer from "./music-reducer"
import profileReducer from "./profile-reducer"
import usersReducer from "./users-reducer."
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from 'redux-form'


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    friendPhotos: friendsReducer,
    music: musicReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store


export default store