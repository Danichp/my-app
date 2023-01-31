import React from "react";
import css from './MyPost.module.css'
import Post from './Post/Post.jsx'




const MyPost = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.message} image={p.image} key={p.id} likes={p.likes} />)

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={css.postsBlock}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} />
                    </div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
                <div className={css.posts}>
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPost;