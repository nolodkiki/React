const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST: 
            let newPost = {
                message: state.newPostText,
                id: 3,
                likes: 0
            }
            state.postData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT: 
            state.newPostText = action.newText
            return state
        default: 
            return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const UpdateNewPosttextActionCreator = text => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer



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