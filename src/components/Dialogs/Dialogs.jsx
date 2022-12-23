import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import React from 'react'
import { Field, reduxForm } from 'redux-form'

import { Navigate } from 'react-router-dom'
// import DilogReduxForm from './DilogsForm'


// const TextForm = (props) => {
//     return (
//         <div className={s.messages}>
//             {props.messageElement}
//             <textarea placeholder='Write something' value={props.messageText} onChange={props.onMessageChange}></textarea>
//             <button onClick={props.addPost}>Add Post</button>
//         </div>
//     )

// }


const Dialogs = (props) => {
    // debugger

    let dialogsElement = props.dialogPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElement = props.dialogPage.messageData.map(m => <Message message={m.message} id={m.id} />)

    const onSubmit = (values) => {
        console.log(values.messageText)
        props.addPost(values.messageText)
        
    }

    return (<>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}>
                    {dialogsElement}
                </div>
                <div className={s.messages}>
                    {messageElement}
                </div>
            </div>
            <DilogReduxForm onSubmit={onSubmit}/>
        </>
    )
}

const DilogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.dilog_form}>
            <Field component='textarea' placeholder='Write something' name='messageText' />
            <button>Add Post</button>
        </form>
    )

}


const DilogReduxForm = reduxForm({form: 'dilogForm'})(DilogsForm)

export default Dialogs



{/* <div className={s.messages}>
                    {messageElement}
                    <textarea placeholder='Write something' value={props.messageText} onChange={onMessageChange}></textarea>
                    <button onClick={addPost}>Add Post</button>
                </div> */}