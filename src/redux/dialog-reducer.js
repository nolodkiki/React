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
    messageText: 'хуй'
}

let dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            // let newMessage = {
            //     message: state.messageText,
            //     id: 3
            // }
            // let stateCopy = {...state}
            // stateCopy.messageData = [...state.messageData]
            // stateCopy.messageData.push(newMessage)
            // stateCopy.messageText = {...state.messageText}
            // stateCopy.messageText = ''
            // return stateCopy
            return {
                ...state,
                messageText: '',
                messageData: [...state.messageData, {message: state.messageText, id: 3}],
            }
            
            
        }    
        case UPDATE_NEW_MESSAGE_TEXT:{
            // let stateCopy = {...state} 
            // stateCopy.messageText = action.newText
            // return stateCopy
            return {
                ...state,
                messageText: action.newText
            }
        }    
        default: return state
    }
}
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const UpdateNewMessageTextActionCreator = (text) => ({type:  UPDATE_NEW_MESSAGE_TEXT, newText: text})

export default dialogReducer