import './NavFriend.css'

const NavFriends = (props) => {
    return (
        <a className='link' href="#"><img className="img__friend" src={props.photo} alt="photo" /></a>
    )
}

export default NavFriends