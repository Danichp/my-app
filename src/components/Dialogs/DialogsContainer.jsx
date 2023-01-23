import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { addMessageCreator, updateNewSendTextCreator } from "./../../redux/dialogsReducer";
import Dialogs from "./Dialogs";


const DialogsContainer = (props) => {

    let state = props.store.getState().dialogsPage;


    let addMessage = () => {
        props.store.dispatch(addMessageCreator());
    }

    let onSendChange = (text) => {
        props.store.dispatch(updateNewSendTextCreator(text));
    }

    return <Dialogs updateNewSendText={onSendChange} addMessage={addMessage} dialogsPage={state}/>
}


export default DialogsContainer; 