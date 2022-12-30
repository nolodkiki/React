import React from "react";
import { Field, reduxForm } from "redux-form"
import { maxLengthCreator, required } from "../../../validators/Validators";
import { Element} from "../../common/preloader/FormsControl/FormControl";

import Post from "./Post/Post";

const MyPosts = React.memo(props => {
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
})


const maxLength = maxLengthCreator(25)
const Textarea = Element("textarea");
const PostForm = (props) => {
    
    return (
        <form onSubmit={props.handleSubmit}>
            {console.log("RENDER")}
            <Field validate={[required, maxLength]} name='newPostText' component={Textarea} placeholder="write something"></Field>
            <div>
                <button>Add Post</button>
            </div>
        </form>
        //props.handleSubmit приходит из reduxForm
    )
}

const PostReduxForm = reduxForm({ form: 'newPostText' })(PostForm)

export default MyPosts;
