import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
    return (
        <div>
            My posts
            <div className='post'>New post</div>
            <div>
                <Post message='BTS' />
                <Post message='Army' />

            </div>
        </div>
    )
}

export default MyPosts