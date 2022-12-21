import React from "react";
import classes from "./../Navbar.module.css"


const FriendsItem = (props) => {
    return (

        <div className={classes.friend}>
            <img className={classes.friendAvatar} src={props.state.image} />
            <div className={classes.friendName}>{props.state.name}</div>
        </div>
    )
}


export default FriendsItem