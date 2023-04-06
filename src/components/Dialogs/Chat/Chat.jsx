import React from "react";
import { Field } from "redux-form";
import classes from "./Chat.module.css"
import send from "./Send.svg"
import { Textarea } from "../../common/FormsControls/FormsControls";
import { maxLengthCreator, requiredField } from "../../../utils/validators/validators";


const Chat = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.wrapper}>
            <Field component={Textarea} validate={[requiredField, maxLengthCreator(30)]} name={"newMessageBody"} className={classes.input} type="text" placeholder="Your message"/>
            <button className={classes.send}>
                <span className={classes.text}>Send</span>
                <img className={classes.image} src={send} alt="" />
            </button>
        </form>
    )
}



export default Chat; 