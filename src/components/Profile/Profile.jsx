import MyPosts from './MyPosts/MyPost'
// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = function(props) {
    return (
        <div>
            <ProfileInfo />
            <MyPosts post={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    )
}

export default Profile