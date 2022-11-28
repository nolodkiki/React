import React from 'react'
import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts(props) {
    let postElem = props.post.map(p => <Post message={p.message} id={p.id} likes={p.likes} />)

    let link = React.createRef()

    let addPost = () => {
        let text = link.current.value
        alert(text)
    }

    return (
        <div>
            <h3>My posts</h3>
            <textarea ref={link} className={s.textarea}></textarea>
            <div>
                <button onClick={addPost}>Add Post</button>
            </div>
            <div className='post'>New post</div>
            <div>
                {postElem}
            </div>
        </div>
    )
}

export default MyPosts