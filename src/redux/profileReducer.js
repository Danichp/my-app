import { profileAPI } from "../api/api";


const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS_PROFILE = "SET_STATUS_PROFILE";


let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you?', image: 'https://vraki.net/sites/default/files/inline/images/1_6.png', likes: '12' },
        { id: 2, message: 'Its my first post', image: 'https://a.d-cd.net/1a424f2s-960.jpg', likes: '1' }
      ],
      newPostText: "ahahah",
      profile: null,
      status: ""
}

const profileReducer = (state = initialState, action) => {


    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: action.newPostBody,
                likes: 4,
                image: "https://a.d-cd.net/1a424f2s-960.jpg"
            };
            return {
                ...state,
                postData: [...state.postData, newPost],
                newPostText: ""
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        case SET_STATUS_PROFILE: {
            return {...state, status: action.status}
        }
        default:
            return state
    }


}

export const addPostActionCreator = (newPostBody) => ({type: ADD_POST, newPostBody})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS_PROFILE, status})


export const getProfile  = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response));
        })
    }
}

export const getStatus  = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response));
        })
    }
}

export const updateStatus  = (status) => {
    return (dispatch) => {
        profileAPI.updateStatus(status)
        .then(response => {
            if (response.resultCode === 0) {
                dispatch(setStatus(status))
            }
            
        })
    }
}




export default profileReducer