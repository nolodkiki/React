import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'

const Dialogs = (props) => {

    let dialogsElement = props.state.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElement = props.state.messageData.map(m => <Message message={m.message} id={m.id} />)

    let link = React.createRef()
    let addPost = () => {
        let text = link.current.value
        alert(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
                <textarea ref={link}></textarea>
                <button onClick={addPost}>Add Post</button>
            </div>
            
        </div>
        
    )
}

export default Dialogs