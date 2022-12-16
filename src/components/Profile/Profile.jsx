// import MyPosts from './MyPosts/MyPost'
import MyPostsContainer from './MyPosts/MyPostContainer'
// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = function(props) {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile