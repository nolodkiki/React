
import s from './Users.module.css'



const Users = (props) => {
    return (<>
        {
            props.users.map(u =>
                <div className={s.item}>
                    <div className={s.person}>
                        <img src={u.photo} alt="img" className={s.photo} />
                        {u.follow
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