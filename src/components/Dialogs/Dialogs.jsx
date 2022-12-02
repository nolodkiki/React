import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { addMessageActionCreator, UpdateNewMessageTextActionCreator } from '../../redux/dialog-reducer'

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElement = props.state.messageData.map(m => <Message message={m.message} id={m.id} />)



    let addPost = () => {
        props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = (e) => {
        let currentValue =  e.target.value
        props.dispatch(UpdateNewMessageTextActionCreator(currentValue))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea placeholder='Write something' value={props.state.messageText} onChange={onMessageChange}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            
        </div>
        
    )
}

export default Dialogs