// import s from './MyPosts.module.css'
import Post from './Post/Post'

function MyPosts() {
    let postData = [
        {message:'BTS', id:'1', likes: '893K'},
        {message:'Army', id:'2', likes: '1.2M'},
    ]
    let postElem = postData.map(p => <Post message={p.message} id={p.id} likes={p.likes} />)

    return (
        <div>
            <h3>My posts</h3>
            <div>
                <button>Add Post</button>
            </div>
            <div className='post'>New post</div>
            <div>
                {postElem}
            </div>
        </div>
    )
}

export default MyPosts