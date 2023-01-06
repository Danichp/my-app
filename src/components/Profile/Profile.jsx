import React from "react";
import classes from'./Profile.module.css'
import MyPosts from "./MyPosts/MyPost.jsx";
import ProfileInfo from "./Profileinfo/Profileinfo";
import { addPost } from "../../redux/state";

const Profile = (props) => {
    return (
    <div>
        <ProfileInfo />
        <MyPosts postData={props.state.postData}
            addPost={props.addPost}
            newPostText={props.state.newPostText}
            updateNewPostText={props.updateNewPostText}/>
    </div>)
}
 
export default Profile;