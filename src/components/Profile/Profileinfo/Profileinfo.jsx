import React from "react";
import classes from './Profileinfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={classes.image} src='https://c.wallhere.com/photos/dd/2c/landscape_nature_mountains_river_forest-142711.jpg!d'></img>
            </div>
            <div className={classes.descriptionBlock}>
                ava +des
            </div>
        </div>
    )
}

export default ProfileInfo