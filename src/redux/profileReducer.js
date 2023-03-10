import { profileAPI } from "../api/api";


const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";


let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you?', image: 'https://vraki.net/sites/default/files/inline/images/1_6.png', likes: '12' },
        { id: 2, message: 'Its my first post', image: 'https://a.d-cd.net/1a424f2s-960.jpg', likes: '1' }
      ],
      newPostText: "ahahah",
      profile: null,
}

const profileReducer = (state = initialState, action) => {


    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 4,
                image: "https://a.d-cd.net/1a424f2s-960.jpg"
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ""
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state
    }


}

export const addPostActionCreator = () => ({type: ADD_POST})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})


export const getProfile  = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response));
        })
    }
}




export default profileReducer