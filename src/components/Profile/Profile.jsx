import React from "react";
import MyPostsContainer from "./MyPosts/MyPostContainer.jsx";
import ProfileInfo from "./Profileinfo/Profileinfo";

const Profile = (props) => {


    return (
    <div>
        <ProfileInfo profile={props.profile}/>
        <MyPostsContainer store={props.store}/>
    </div>)
}
 
export default Profile;