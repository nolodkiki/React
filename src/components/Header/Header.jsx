import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={s.header}>
            <img alt='logo' src='https://images.vexels.com/media/users/3/137349/isolated/preview/7b8717630942d7fb84ae3c74b0602c0f-heart-logo-minimalism.png' />
            <p className={s.logo}>DICK</p>
            <p className={s.slogan}>ВОТ ОНИ СЛЕВА НАПРАВО {'<'}3</p>
            {props.auth ? props.login : <NavLink to='login'>Login</NavLink>}
        </header>
    )
}


export default Header