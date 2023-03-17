import React from "react";
import css from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Chat from "./Chat/Chat";
import { Navigate } from "react-router-dom";


const Dialogs = (props) => {
    let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} key={dialog.id} image={dialog.image}/>);

    let messagesElements = props.dialogsPage.messagesData.map(message => <Message id={message.id} key={message.id} message={message.message}/>);

    if (!props.isAuth) return <Navigate to="/login"/>;

    return (
        <div>
            <div className={css.dialogsHeader}>
                <div className={css.headerText}>
                    Messages
                </div>
                <button className={css.headerBtn}>New message</button>
            </div>
            <div className={css.dialogs}>
                <div className={css.dialogsItems}>
                    {dialogsElements}
                </div>
                <div className={css.messages}>
                    <div>
                        {messagesElements}
                    </div>
                    <Chat  updateNewSendText={props.updateNewSendText} addMessage={props.addMessage} newSendText={props.dialogsPage.newSendText}/>
                </div>
            </div>
        </div>
    )
}


export default Dialogs; 