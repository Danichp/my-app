import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import classes from './Profileinfo.module.css'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div>
                <img className={classes.image} src='https://c.wallhere.com/photos/dd/2c/landscape_nature_mountains_river_forest-142711.jpg!d'></img>
            </div>
            <div className={classes.descriptionBlock}>
                <div className={classes.avatar}>
                    <img src={props.profile.photos.large} alt="" />
                </div>
                <div className={classes.info}>
                    <div className={classes.fullName}>{props.profile.fullName}</div>
                    <div className={classes.aboutMe}>{props.profile.aboutMe}</div>
                    <div className={classes.contacts}>
                        <ul>
                            <li>{props.profile.contacts.facebook != null ? props.profile.contacts.facebook : null }</li>
                            <li>{props.profile.contacts.website != null ? props.profile.contacts.website : null }</li>
                            <li>{props.profile.contacts.vk != null ? props.profile.contacts.vk : null }</li>
                            <li>{props.profile.contacts.twitter != null ? props.profile.contacts.twitter : null }</li>
                            <li>{props.profile.contacts.instagram != null ? props.profile.contacts.instagram : null }</li>
                            <li>{props.profile.contacts.youtube != null ? props.profile.contacts.youtube : null }</li>
                            <li>{props.profile.contacts.github != null ? props.profile.contacts.github : null }</li>
                            <li>{props.profile.contacts.mainLink != null ? props.profile.contacts.mainLink : null }</li>
                        </ul>
                    </div>
                    <div className={classes.job}></div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo