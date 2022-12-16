import { NavLink } from 'react-router-dom'
import s from './Navigation.module.css'
import NavFriends from './NavFriends/NavFriends'

const Navigation = (props) => {
    let state = props.store.getState()
    console.log(state)
    let friend = state.friendPhotos.photos.slice(0, 3).map(p => <NavFriends photo={p.photo} />);
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/profile'>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/dialogs'>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/news'>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/music'>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/users'>Users</NavLink>
            </div>
            <div className={s.item}>
                <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/friends'>Friends</NavLink>
                    <div className={s.list}>{friend}</div>
            </div>
            <div className={s.item}>
                <NavLink className = { navData => navData.isActive ? s.active : s.item } to='/setings'>Setings</NavLink>
            </div>
        </nav>
    )
}


export default Navigation


// NavLink меняет url