import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPost from "./MyPost";




const MyPostsContainerf = (props) => {
   

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

let mapStateToProps = (state) => {
    debugger
    return{
        posts: state.profilePage.postData,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}


const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost)

export default MyPostContainer;