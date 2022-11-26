import { NavLink } from 'react-router-dom'
import s from './Dialogs.module.css'


const DialogItem = (props) => {
    const path = '/dialogs/' + props.id
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={s.dialog}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogsData = [
        {name: 'Jungkook', id: '1'},
        {name: 'Namjoon', id: '2'},
        {name: 'Taehyung', id: '3'},
        {name: 'Yoon-gi', id: '4'},
        {name: 'Jimin', id: '5'},
        {name: 'Hosok', id: '6'},
        {name: 'Jin', id: '7'}
    ]

    let messageData = [
        {message:'Party Party yeah', id:'1'},
        {message:'RRRRRRRRRRAP MONSTA', id:'2'}
    ]

    let dialogsElement = dialogsData.map(d => <DialogItem name={d.name} id={d.id} />)
    let messageElement = messageData.map(m => <Message message={m.message} id={m.id} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElement}
            </div>
            <div className={s.messages}>
                {messageElement}
            </div>
        </div>
    )
}

export default Dialogs