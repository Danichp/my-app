let rerenderEntireTree = () => {
  console.log("state changed")
}

let state = {

  profilePage: {
    postData: [
      { id: 1, message: 'Hi, how are you?', image: 'https://vraki.net/sites/default/files/inline/images/1_6.png', likes: '12' },
      { id: 2, message: 'Its my first post', image: 'https://a.d-cd.net/1a424f2s-960.jpg', likes: '1' }
    ],
    newPostText: "ahahah"

  },
  dialogsPage: {
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
  },

  sidebar: [
    { id: 1, name: 'Danya', image: 'https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg' },
    { id: 2, name: 'Nasya', image: 'https://drasler.ru/wp-content/uploads/2019/05/Скачать-фото-на-аву-с-котами-в-ВК-подборка-аватарок-30.jpg' },
    { id: 3, name: 'Katya', image: 'https://uprostim.com/wp-content/uploads/2021/03/image056-90.jpg' },
    { id: 4, name: 'Sonya', image: 'https://coolsen.ru/wp-content/uploads/2021/06/209-2.jpg' },
    { id: 5, name: 'Olya', image: 'https://pixelbox.ru/wp-content/uploads/2022/06/risovanie-avatars-for-girls-pixelbox.ru-78.jpg' },
    { id: 6, name: 'Parasha', image: 'https://android-obzor.com/wp-content/uploads/2022/03/55-3.jpg' },
    { id: 7, name: 'Sveta', image: 'https://klike.net/uploads/posts/2018-06/1528377552_15.jpg' },
  ],

  newSendText: "fdgdfg",

  
  }


export const addPost = (postMessage) => {
    let newPost = {
      id: 5,
      message: state.profilePage.newPostText,
      likes: 4,
      image: "https://a.d-cd.net/1a424f2s-960.jpg"
    };

    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state)
}

export const subscribe = (observer) =>{
  rerenderEntireTree = observer
}



export const addMessage = () => {
  let newMessage = {
    id: 4,
    message: state.dialogsPage.newSendText
  }

  state.dialogsPage.messagesData.push(newMessage);
  state.dialogsPage.newSendText = "";
  rerenderEntireTree(state);
}

export const updateNewSendText = (newText) => {

  state.dialogsPage.newSendText = newText;
  rerenderEntireTree(state);
}
export default state