import React from "react";
import { Field } from "redux-form";
import { addMessageCreator, updateNewSendTextCreator } from "../../../redux/dialogsReducer";
import classes from "./Chat.module.css"
import send from "./Send.svg"


const Chat = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.wrapper}>
            <Field component={"input"} name={"newMessageBody"} className={classes.input} type="text" placeholder="Your message"/>
            <button className={classes.send}>
                <span className={classes.text}>Send</span>
                <img className={classes.image} src={send} alt="" />
            </button>
        </form>
    )
}



export default Chat; 