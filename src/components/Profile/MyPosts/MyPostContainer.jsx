import React from 'react'
import { addPostActionCreator, UpdateNewPosttextActionCreator } from '../../../redux/profile-reducer'
import MyPosts from './MyPost'


function MyPostsContainer(props) {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let onPostChange = (text) => {
        let action = () => UpdateNewPosttextActionCreator(text)
        props.store.dispatch(action(text))
    }

    return (
        <div>
            <MyPosts newPostText={state.profilePage.newPostText} post={state.profilePage.postData} addPost={addPost} onPostChange={onPostChange}/>
        </div>

        
    )
}

export default MyPostsContainer