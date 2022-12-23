import { Field, reduxForm } from 'redux-form'
import s from './Dialogs.module.css'



const DilogsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={s.dilog_form}>
            {/* <Field component={'input'} placeholder='Write something' value={props.messageText} onChange={props.onMessageChange} /> */}
            <Field component='textarea' placeholder='Write something' nmae='messageText' />
            <button>Add Post</button>
        </form>
    )

}


const DilogReduxForm = reduxForm({form: 'dilogForm'})(DilogsForm)

export default DilogReduxForm