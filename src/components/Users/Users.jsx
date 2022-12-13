
import s from './Users.module.css'
import axios from 'axios'
import idol from '../../img/Jungkook.jpg'
import React from 'react'

class Users extends React.Component {
    // constructor(props) {
    //     super(props)
    //     axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //     .then (respons => this.props.setUsers(respons.data.items))
    // }

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(respons => {
                this.props.setUsers(respons.data.items)
                this.props.setTotalUsers(respons.data.totalCount)
            })
    }
    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get('https://social-network.samuraijs.com/api/1.0/users')
    //         .then (respons => this.props.setUsers(respons.data.items))
    //     }
    // }
    onPageChange = (pageNumber) => {
        this.props.page(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(respons => {
                this.props.setUsers(respons.data.items)
            })
    }



    render() {
        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []

        for (let i = 1; i <= pageCount; i++) {
            pages.push(i)
        }
        let curP = this.props.currentPage;
        let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
        let curPL = curP + 5;
        let slicedPages = pages.slice(curPF, curPL);


        return (<>
            {slicedPages.map(p => {
                return <span className={this.props.currentPage === p && s.selectedPage} onClick={(e) => { this.onPageChange(p) }}>{p}</span>
            })}
            {
                this.props.users.map(u =>
                    <div className={s.item}>
                        <div className={s.person}>
                            <img src={u.photos.small != null ? u.photos.small : idol} alt="img" className={s.photo} />
                            {u.followed
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }}>Follow</button>}
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
}

export default Users