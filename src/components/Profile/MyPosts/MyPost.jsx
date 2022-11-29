import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
    // debugger
    let postElem = props.post.postData.map(p => <Post message={p.message} id={p.id} likes={p.likes} />)

    let link = React.createRef()

    let addPost1 = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = link.current.value
        props.updateNewPostText(text)
    }

    return (
        <div>
            <h3>My posts</h3>
            <textarea onChange={onPostChange} ref={link} className={s.textarea} value={props.post.newPostText}></textarea>
            <div>
                <button onClick={addPost1}>Add Post</button>
            </div>
            <div className='post'>New post</div>
            <div>
                {postElem}
            </div>
        </div>
    )
}

export default MyPosts