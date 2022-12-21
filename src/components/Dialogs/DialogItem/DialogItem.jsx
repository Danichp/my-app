import React from "react";
import css from "./../Dialogs.module.css"
import { NavLink } from "react-router-dom";


const DialogItem = (props) => {

    return (
            <div className={css.dialog}>
                <NavLink to={'/dialogs/' + props.id}>
                    <div className={css.dialogWrapper}>
                        <img src={props.image} className={css.dialogAvatar} />
                        <div className={css.name}>{props.name}</div>
                    </div>
                </NavLink>
            </div>
    )
}



export default DialogItem; 