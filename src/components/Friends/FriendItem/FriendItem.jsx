import s from './FriendItem.module.css'

const FriendItem = (props) => {
    return (
        <div className={s.item}>
            <a href="#">
                <img src={props.photo} alt="photo" />
                <p>{props.name}</p>
            </a>
        </div>
    )
}

export default FriendItem