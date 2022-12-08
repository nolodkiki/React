import { connect } from "react-redux"
import MyContext from "../../Context"
import FriendItem from "./FriendItem/FriendItem"
import Friends from "./Friends"
import s from "./Friends.module.css"

// const Friends = () => {
//     return (
//         <MyContext.Consumer> 
//             {
//             (store) => {
//                 let state = store.getState()
//                 let photos = state.friendPhotos.photos.map(p => <FriendItem photo={p.photo} name={p.name}/>)
//                 return (
//                     <div className={s.list}>
//                         {photos}
//                     </div>
//                 )
//             }
//         }
//         </MyContext.Consumer>
//     )
// }

const mapStateToProps = (state) => {
    
    return {
        friends: state.friendPhotos.photos
    }
}

const FriendsContainer = connect(mapStateToProps)(Friends)

export default FriendsContainer