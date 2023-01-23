import React from "react";
import { addMessageCreator, updateNewSendTextCreator } from "../../../redux/dialogsReducer";
import classes from "./Chat.module.css"
import send from "./Send.svg"


const Chat = (props) => {
    debugger

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.addMessage();
    }

    let onSendChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewSendText(text)
    }

    return (
        <div className={classes.wrapper}>
            <input className={classes.input} type="text" placeholder="Your message" ref={newMessageElement} onChange={onSendChange} value={props.newSendText} />
            <button onClick={addMessage} className={classes.send}>
                <span className={classes.text}>Send</span>
                <img className={classes.image} src={send} alt="" />
            </button>
        </div>
    )
}



export default Chat; 