import React from "react";
import { Field, reduxForm } from "redux-form";
import css from './MyPost.module.css'
import Post from './Post/Post.jsx'

const PostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={"textarea"} name="newPostBody" placeholder="Your post"/>
            </div>
            <button >Add post</button>
        </form>
    )
}




const MyPost = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} image={p.image} key={p.id} likes={p.likes} />)

    let addNewPost= (values) => {
        props.addPost(values.newPostBody)
    }


    return (
        <div className={css.postsBlock}>
            <div>
                <h3>My post</h3>
                <PostReduxForm onSubmit={addNewPost}/>
                <div className={css.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

const PostReduxForm = reduxForm({form: "postForm"})(PostForm)



export default MyPost;