import React from "react";
import { Field, reduxForm } from "redux-form"

import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postElem = props.post.map((p) => <Post message={p.message} id={p.id} likes={p.likes} />)


    const onSubmit = (values) => {
        console.log(values)
        props.addPost(values.newPostText)
    }
    return (
        <div>
            <h3>My posts</h3>
            <PostReduxForm onSubmit={onSubmit} />
            <div className='post'>New post</div>
            <div>{postElem}</div>
        </div>
    );
}




const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field className={s.textarea} name='newPostText' component='textarea' placeholder="write something"></Field>
            <div>
                <button>Add Post</button>
            </div>
        </form>
        //props.handleSubmit приходит из reduxForm
    )
}

const PostReduxForm = reduxForm({ form: 'newPostText' })(PostForm)

export default MyPosts;
