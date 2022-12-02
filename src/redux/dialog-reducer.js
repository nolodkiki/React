const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW_MESSAGE-TEXT'
const dialogReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                message: state.messageText,
                id: 3
            }
            state.messageData.push(newMessage)
            state.messageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.messageText = action.newText
            return state
        default: return state
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const UpdateNewMessageTextActionCreator = (text) => ({type:  UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogReducer