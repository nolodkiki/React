const ADD_MESSAGE = "ADD-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW_MESSAGE-TEXT'

let initialState = {
    dialogsData: [
        { name: 'Jungkook', id: '1' },
        { name: 'Namjoon', id: '2' },
        { name: 'Taehyung', id: '3' },
        { name: 'Yoon-gi', id: '4' },
        { name: 'Jimin', id: '5' },
        { name: 'Hosok', id: '6' },
        { name: 'Jin', id: '7' }
    ],

    messageData: [
        { message: 'Party Party yeah', id: '1' },
        { message: 'RRRRRRRRRRAP MONSTA', id: '2' }
    ],
    messageText: ''
}

const dialogReducer = (state = initialState, action) => {
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