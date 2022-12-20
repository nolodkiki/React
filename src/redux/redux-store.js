import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux"
import authReducer from "./auth-reducer"
import dialogReducer from "./dialog-reducer"
import friendsReducer from "./friends-reducer"
import musicReducer from "./music-reducer"
import profileReducer from "./profile-reducer"
import usersReducer from "./users-reducer."
import thunkMiddleware from "redux-thunk"


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    friendPhotos: friendsReducer,
    music: musicReducer,
    usersPage: usersReducer,
    auth: authReducer
})


let store = createStore(reducers, applyMiddleware(thunkMiddleware))

// window.store = store


export default store