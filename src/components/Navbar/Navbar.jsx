import React from "react";
import { NavLink  } from "react-router-dom";
import FriendsItem from "./FriendItem/FriendItem";
import classes from'./Navbar.module.css'
import random from "./FriendItem/RandomFriend";

function getRandomNumber (props) {
    return Math.floor(Math.random() * props.state.length)
}

const Navbar = (props) => {
    return <nav className={classes.nav}>
        <div className="container-navbar">
                <NavLink className={classes.navigation} to="/profile"><span>Profile</span></NavLink >
                <NavLink className={classes.navigation} to="/dialogs"><span>Messages</span></NavLink >
                <NavLink className={classes.navigation} to="/users"><span>Users</span></NavLink >
                <NavLink className={classes.navigation} to="/news"><span>News</span></NavLink >
                <NavLink className={classes.navigation} to="/music"><span>Music</span></NavLink >
                <NavLink className={classes.navigation} to="/settings"><span>Settings</span></NavLink >
            <div className={classes.friendsItem}>
                <div className={classes.friendsText}>Friends</div>  
                <div className={classes.friends}>
                    <FriendsItem state={props.state[getRandomNumber (props)]}/>
                    <FriendsItem state={props.state[getRandomNumber (props)]}/>
                    <FriendsItem state={props.state[getRandomNumber (props)]}/>
                </div>
            </div>
        </div>
    </nav>
}

export default Navbar;