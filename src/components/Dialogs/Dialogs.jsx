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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Jungkook' id='1'/>
                <DialogItem name='Namjoon' id='2' />
                <DialogItem name='Taehyung' id='3' />
                <DialogItem name='Yoon-gi' id='4' />
                <DialogItem name='Jimin' id='5' />
                <DialogItem name='Hosok' id='6' />
                <DialogItem name='Jin' id='7' />
            </div>
            <div className={s.messages}>
                <Message message='Party Party yeah'/>
                <Message message='RRRRRRRRRRAP MONSTA'/>
            </div>
        </div>
    )
}

export default Dialogs