import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPost from "./MyPost";




const MyPostsContainer = (props) => {
   

    let state = props.store.getState();
    console.log(state)

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (< MyPost  updateNewPostText = {onPostChange}  addPost = {addPost} posts={state.profilePage.postData}
        newPostText={state.profilePage.newPostText}/>)
}

export default MyPostsContainer;