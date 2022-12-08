import MyContext from "../../Context"
import FriendItem from "./FriendItem/FriendItem"
import s from "./Friends.module.css"

const Friends = (props) => {
    let photos = props.friends.map(p => <FriendItem photo={p.photo} name={p.name} />)
    return (
        <div className={s.list}>
            {photos}
        </div>
    )
}

export default Friends