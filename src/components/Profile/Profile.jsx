import React from "react";
import MyPosts from "./MyPosts/MyPost.jsx";
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {
    return (
    <div>
        <ProfileInfo />
        <MyPosts postData={props.state.postData}
            dispatch={props.dispatch}
            newPostText={props.state.newPostText}/>
    </div>)
}
 
export default Profile;