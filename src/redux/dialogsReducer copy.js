const dialogsReducer = (state, action) => {

    switch(action.type){
        case "ADD-MESSAGE": 
            let newMessage = {
                id: 4,
                message: state.newSendText
            }
        
            state.messagesData.push(newMessage);
            state.newSendText = "";
            return state;
        case "UPDATE-NEW-SEND-TEXT":
            state.newSendText = action.newText;
            return state;
        default:
            return state

    }
        
}

export const addMessageCreator = () => {
    return {
        type: 'ADD-MESSAGE',
    }
  }
  
  export const updateNewSendTextCreator = (text) => {
    return {
        type: 'UPDATE-NEW-SEND-TEXT',
        newText: text
    }
  }

export default dialogsReducer