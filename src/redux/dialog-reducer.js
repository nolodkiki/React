const ADD_MESSAGE = "ADD-MESSAGE"

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
    ]
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
                messageData: [...state.messageData, {message: action.messageText, id: 3}],
            }
            
            
        }   
        default: return state
    }
}
export const addMessageActionCreator = (messageText) => ({type: ADD_MESSAGE, messageText})

export default dialogReducer