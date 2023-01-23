
let initialState = {
    dialogsData: [
        { id: 1, name: 'Danya', image: 'https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg' },
        { id: 2, name: 'Nasya', image: 'https://drasler.ru/wp-content/uploads/2019/05/Скачать-фото-на-аву-с-котами-в-ВК-подборка-аватарок-30.jpg' },
        { id: 3, name: 'Katya', image: 'https://uprostim.com/wp-content/uploads/2021/03/image056-90.jpg' },
        { id: 4, name: 'Sonya', image: 'https://coolsen.ru/wp-content/uploads/2021/06/209-2.jpg' },
        { id: 5, name: 'Olya', image: 'https://pixelbox.ru/wp-content/uploads/2022/06/risovanie-avatars-for-girls-pixelbox.ru-78.jpg' },
        { id: 6, name: 'Parasha', image: 'https://android-obzor.com/wp-content/uploads/2022/03/55-3.jpg' },
        { id: 7, name: 'Sveta', image: 'https://klike.net/uploads/posts/2018-06/1528377552_15.jpg' },
      ],

      messagesData: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'how are you' },
        { id: 3, message: 'bla bla fuck you' },
      ],

      newSendText: "fdgdfg"
}




const dialogsReducer = (state = initialState, action) => {
    debugger
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