import React from "react";
import classes from'./Profile.module.css'
import MyPosts from "./MyPosts/MyPost.jsx";
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    return (
    <div>
        <ProfileInfo />
        <MyPosts postData={props.state.postData}/>
    </div>)
}
 
export default Profile;