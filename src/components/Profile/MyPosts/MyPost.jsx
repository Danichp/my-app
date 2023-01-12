import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/state";
import css from './MyPost.module.css'
import Post from './Post/Post.jsx'




const MyPosts = (props) => {


    let postsElements = props.postData.map(p => <Post message={p.message} image={p.image} likes={p.likes} />)

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={css.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                    </div>
                    <button onClick={addPost}>Add post</button>
                </div>
                <div className={css.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;