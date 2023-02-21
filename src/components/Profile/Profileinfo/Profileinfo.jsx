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
                    <div className={classes.contacts}> Contacts
                        <ul>
                            {props.profile.contacts.facebook != null ? <li>{props.profile.contacts.facebook}</li> : null }
                            {props.profile.contacts.website != null ? <li>{props.profile.contacts.website}</li> : null }
                            {props.profile.contacts.vk != null ? <li>{props.profile.contacts.vk}</li> : null }
                            {props.profile.contacts.twitter != null ? <li>{props.profile.contacts.twitter}</li> : null }
                            {props.profile.contacts.instagram != null ? <li>{props.profile.contacts.instagram}</li> : null }
                            {props.profile.contacts.youtube != null ? <li>{props.profile.contacts.youtube}</li> : null }
                            {props.profile.contacts.github != null ? <li>{props.profile.contacts.github}</li> : null }
                            {props.profile.contacts.mainLink != null ? <li>{props.profile.contacts.mainLink}</li> : null }
                        </ul>
                    </div>
                    <div className={classes.job}>
                        <div className={classes.lookingForAJob}>looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
                        <div className={classes.lookingForAJobDescription}>{props.profile.lookingForAJobDescription != null ? props.profile.lookingForAJobDescription : null}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo