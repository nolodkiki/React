import MyPosts from './MyPosts/MyPost'
// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = function(props) {
    let post = props.state.postData
    return (
        <div>
            <ProfileInfo />
            <MyPosts post={post}/>
        </div>
    )
}

export default Profile