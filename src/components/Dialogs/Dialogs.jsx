import React from "react";
import css from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import Chat from "./Chat/Chat";


const Dialogs = (props) => {
    let dialogsElements = props.state.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name} image={dialog.image}/>)

    let messagesElements = props.state.messagesData.map(message => <Message id={message.id} message={message.message}/>)



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
                    <Chat addMessage={props.addMessage} newSendText={props.state.newSendText} updateNewSendText={props.updateNewSendText}/>
                </div>
            </div>
        </div>
    )
}


export default Dialogs; 