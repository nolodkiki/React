import React from 'react'

import s from './MyPosts.module.css'
import Post from './Post/Post'


function MyPosts(props) {
    let postElem = props.post.map(p => <Post message={p.message} id={p.id} likes={p.likes} />)

    let link = React.createRef()
    let onAddPost = () => {
        props.addPost()
    }
    
    let onPostChange = () => {
        let text = link.current.value
        props.onPostChange(text)
    }
    debugger
    return (
        <div>
            <h3>My posts</h3>
            <textarea onChange={onPostChange} ref={link} className={s.textarea} value={props.newPostText}></textarea>
            <div>
                <button onClick={onAddPost}>Add Post</button>
            </div>
            <div className='post'>New post</div>
            <div>
                {postElem}
            </div>
        </div>
    )
}

export default MyPosts