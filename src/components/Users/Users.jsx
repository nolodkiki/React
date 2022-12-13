import s from './Users.module.css'
import idol from '../../img/Jungkook.jpg'

const Users = (props) => {
    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    return (
        <>
            {slicedPages.map(p => {
                return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => { props.onPageChange(p) }}>{p}</span>
            })}
            {
                props.users.map(u => 
                    <div className={s.item}>
                        <div className={s.person}>
                            <img src={u.photos.small != null ? u.photos.small : idol} alt="img" className={s.photo} />
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
        </>
    )
}

export default Users