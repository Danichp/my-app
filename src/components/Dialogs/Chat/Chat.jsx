import React from "react";
import classes from "./Chat.module.css"
import send from "./Send.svg"


const Chat = (props) => {

    let newMessageElement = React.createRef()

    let addMessage = () => {
        props.dispatch({ type: "ADD-MESSAGE" });
    }

    let onSendChange = () => {
        let text = newMessageElement.current.value;
        props.dispatch({
            type: "UPDATE-NEW-SEND-TEXT",
            newText: text
        });
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