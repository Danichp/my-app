import React from "react";
import css from "./../Dialogs.module.css"


const Message = (props) => {
    return (
        <div>
            <div className={css.messageWrapper}>
                <img src='https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg' className={css.dialogAvatar} />
                <div className={css.message}>{props.message}</div>
            </div>
        </div>
    )
}



export default Message; 