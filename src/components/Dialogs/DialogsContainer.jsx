import React from 'react'
import { addMessageActionCreator, UpdateNewMessageTextActionCreator } from '../../redux/dialog-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    // debugger
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (body) => {
        props.store.dispatch(UpdateNewMessageTextActionCreator(body))
    }
    return <Dialogs messageText={state.dialogPage.messageText} dialogPage={state.dialogPage} addPost={addPost} onMessageChange={onMessageChange}/>
}

export default DialogsContainer