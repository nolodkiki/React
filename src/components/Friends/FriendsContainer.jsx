import { connect } from "react-redux"
import Friends from "./Friends"

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