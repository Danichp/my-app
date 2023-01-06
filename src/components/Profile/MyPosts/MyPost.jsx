import React from "react";
import css from './MyPost.module.css'
import Post from './Post/Post.jsx'


const MyPosts = (props) => {


    let postsElements = props.postData.map( p => <Post message={p.message} image={p.image} likes={p.likes} />)

    let newPostElement = React.createRef();

    let addPost = () => {
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
                    <button onClick={ addPost }>Add post</button>
                </div>
                <div className={css.posts}>
                        {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;