import React from 'react'
import { connect } from 'react-redux'
import MyContext from '../../Context'
import { addMessageActionCreator, UpdateNewMessageTextActionCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs'

// const DialogsContainer = () => {
    // debugger

    // return (
    //     <MyContext.Consumer>{
    //         (store) => {
    //             let state = store.getState()

    //             let addPost = () => {
    //                 store.dispatch(addMessageActionCreator())
    //             }

    //             let onMessageChange = (body) => {
    //                 store.dispatch(UpdateNewMessageTextActionCreator(body))
    //             }
    //             return (<Dialogs messageText={state.dialogPage.messageText} dialogPage={state.dialogPage} addPost={addPost} onMessageChange={onMessageChange} />)
    //         }
    //     }

    //     </MyContext.Consumer>
    // )

    
// }
let mapStateToProps = (state) => {
    return {
        messageText: state.dialogPage.messageText,
        dialogPage: state.dialogPage,
        
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {dispatch(addMessageActionCreator())},
        onMessageChange: (body) => {dispatch(UpdateNewMessageTextActionCreator(body))}
    }
}
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer



    // <MyContext.Consumer>
    // {value => {}}
    // </MyContext.Consumer>