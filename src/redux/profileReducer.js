
let initialState = {
    postData: [
        { id: 1, message: 'Hi, how are you?', image: 'https://vraki.net/sites/default/files/inline/images/1_6.png', likes: '12' },
        { id: 2, message: 'Its my first post', image: 'https://a.d-cd.net/1a424f2s-960.jpg', likes: '1' }
      ],
      newPostText: "ahahah"
}

const profileReducer = (state = initialState, action) => {


    switch(action.type) {
        case 'ADD-POST': {
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
        case "UPDATE-NEW-POST-TEXT": {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state
    }


}

export const addPostActionCreator = () => {
    return {
        type: 'ADD-POST',
    }
  }
  
  export const updateNewPostTextActionCreator = (text) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
  }



export default profileReducer