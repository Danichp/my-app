import React from "react";
import classes from "./Chat.module.css"
import send from "./Send.svg"


const Chat = (props) => {

    let newMessageElement = React.createRef()

    let sendMessage = () => {
        alert(newMessageElement.current.value);
        newMessageElement.current.value = ""
    }

    return (
        <div className={classes.wrapper}>
            <input className={classes.input} type="text" placeholder="Your message" ref={newMessageElement}/>
            <button onClick={sendMessage} className={classes.send}>
                <span className={classes.text}>Send</span>
                <img className={classes.image} src={send} alt="" />
            </button>
        </div>
    )
}



export default Chat; 