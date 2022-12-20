// import MyPosts from './MyPosts/MyPost'
import { Navigate } from 'react-router-dom'
import MyPostsContainer from './MyPosts/MyPostContainer'
// import s from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = function(props) {
    // if (!props.isAuth) return <Navigate to={'/login'}/>
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer store={props.store}/>
        </div>
    )
}

export default Profile