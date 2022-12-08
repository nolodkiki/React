// import React from 'react'
import { connect } from 'react-redux'
// import MyContext from '../../../Context'
import { addPostActionCreator, UpdateNewPosttextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPost'

// function MyPostsContainer(props) {

//     return (
//         <MyContext.Consumer>{
//             (store) => {
//                 let state = store.getState()

//                 let addPost = () => {
//                 props.store.dispatch(addPostActionCreator())
//             }
            
//             let onPostChange = (text) => {
//                 let action = () => UpdateNewPosttextActionCreator(text)
//             store.dispatch(action(text))
//             }
//             return (<MyPosts newPostText={state.profilePage.newPostText} post={state.profilePage.postData} addPost={addPost} onPostChange={onPostChange} />)
//             }
//         }
//         </MyContext.Consumer>

//     )
// }
const mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        post: state.profilePage.postData
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostActionCreator()),
        onPostChange: (text) => dispatch(UpdateNewPosttextActionCreator(text))
    }
        
}
// const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default connect(mapStateToProps,mapDispatchToProps)(MyPosts)