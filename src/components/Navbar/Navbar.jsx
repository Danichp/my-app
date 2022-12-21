import React from "react";
import { NavLink } from "react-router-dom";
import FriendsItem from "./FriendItem/FriendItem";
import classes from'./Navbar.module.css'
import random from "./FriendItem/RandomFriend";

function getRandomNumber (props) {
    return Math.floor(Math.random() * props.state.length)
}

const Navbar = (props) => {
    return <nav className={classes.nav}>
        <div className="container-navbar">
            <div className={classes.navigation}>
                <NavLink to="/profile">Profile</NavLink>
            </div>
            <div className={classes.navigation}>
                <NavLink to="/dialogs">Messages</NavLink>
            </div>
            <div className={classes.navigation}>
                <NavLink to="/news">News</NavLink>
            </div>
            <div className={classes.navigation}>
                <NavLink to="/music">Music</NavLink>
            </div>
            <div className={classes.navigation}>
                <NavLink to="/settings">Settings</NavLink>
            </div>
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