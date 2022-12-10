
import s from './Users.module.css'
import axios from 'axios'
import idol from '../../img/Jungkook.jpg'



const Users = (props) => {
    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then (respons => props.setUsers(respons.data.items))
        }
    }
    
    return (<>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u =>
                <div className={s.item}>
                    <div className={s.person}>
                        <img src={u.photos.small != null ? u.photos.small : idol } alt="img" className={s.photo} />
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }}>Follow</button>}
                    </div>
                    <div className={s.info}>
                        <div className={s.name}>{u.name}</div>
                        <div className={s.message}>{u.message}</div>
                    </div>
                    <div className={s.location}>
                        <div className={s.city}>{u.city}</div>
                        <div className={s.country}>{u.country}</div>
                    </div>
                </div>
            )
        }
    </>)
}

export default Users