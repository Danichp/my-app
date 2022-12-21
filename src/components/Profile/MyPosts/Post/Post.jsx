import React from "react";
import css from './Post.module.css'

const Post = (props) => {



    return <div className="item">
        <div className={css.wrapper}>
            <img className={css.avatar} src={props.image}></img>
            <div>{props.message}</div>
        </div>
        <div className={css.likes}>Likes {props.likes}</div>
    </div>

}

export default Post;