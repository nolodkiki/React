import {combineReducers, legacy_createStore as createStore} from "redux"
import dialogReducer from "./dialog-reducer"
import friendsReducer from "./friends-reducer"
import musicReducer from "./music-reducer"
import profileReducer from "./profile-reducer"


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogReducer,
    friendPhotos: friendsReducer,
    music: musicReducer
})


let store = createStore(reducers)

console.log(store)

export default store
