import s from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={s.item}>
            <img src={props.photo} alt="photo" />
            <p>{props.name}</p>
        </div>
    )
}

export default FriendItem