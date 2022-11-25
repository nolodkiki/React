import s from './Header.module.css'

const Header = function() {
    return (
        <header className={s.header}>
            <img src='https://images.vexels.com/media/users/3/137349/isolated/preview/7b8717630942d7fb84ae3c74b0602c0f-heart-logo-minimalism.png' />
            <p className={s.logo}>DICK</p>
            <p className={s.slogan}>ВОТ ОНИ СЛЕВА НАПРАВО {'<'}3</p>
        </header>
    )
}


export default Header