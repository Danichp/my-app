import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator} from "../../../redux/profileReducer";
import MyPost from "./MyPost";

let mapStateToProps = (state) => {
    return{
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        addPost: (newPostBody) => {
            dispatch(addPostActionCreator(newPostBody));
        }
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;