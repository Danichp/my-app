import React from "react";
import classes from "./Users.module.css"



let Users = (props) => {

    if (props.users.length === 0) {
    props.setUsers( [
        {id: 1, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg', followed: true, fullName: "Nasya", status: "I am KAKA", location: {city: "Krasnoyarsk", country: "Russia"}},
        {id: 2, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg', followed: true, fullName: "Danya", status: "I am boss", location: {city: "Minsk", country: "Belarus"}},
        {id: 3, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg', followed: false, fullName: "Sonya", status: "I am KAKA", location: {city: "Krasnoyarsk", country: "Russia"}},
        {id: 4, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg', followed: false, fullName: "Busya", status: "I am KAKA", location: {city: "Krasnoyarsk", country: "Russia"}}
    ])
}

    return(
        <div>
            {
                props.users.map(u => <div key={u.id}  className={classes.wrapper}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={classes.avatar}/>
                        </div>
                        <div>
                            {u.followed 
                            ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button> 
                            : <button onClick={ () => {props.follow(u.id)}}>Follow</button>}
                            
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span> 
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
  
                </div>)
            }
        </div>
    )

}

export default Users