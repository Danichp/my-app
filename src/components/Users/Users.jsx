import React from "react";
import classes from "./Users.module.css";
import userPhoto from "../../assets/images/user.png"
import { Form, NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";



let SearchPageForm = (props) => {
    return(
    <form onSubmit={props.handleSubmit}>
        <div>
            <Field component={"input"} type={"number"} min={1} max={props.pages.length} name="searchPage" placeholder={"Номер страницы"}/>
        </div>
    </form>
    )
}




let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);

    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let searchPage = (values) => {
        props.onPageChanged(+values.searchPage)
    }



    return (
        <div className={classes.users}>
            <div className={classes.pagination}>
                <div className={classes.pages}>
                    <span onClick={(e) => { props.onPageChanged(props.currentPage - 1); }}>❮</span>
                    {pages.slice(props.currentPage - 1 , props.currentPage + 10).map(p => {
                        return <span className={props.currentPage === p && classes.selectedPage}
                            onClick={(e) => { props.onPageChanged(p); }}>{p} </span>
                    
                    })}
                    <span>{(props.currentPage + 10 - pages.at(-1) >= 0) ? null : "..."}</span>
                    <span onClick={(e) => { props.onPageChanged(props.currentPage + 1); }}>❯</span>
                </div>
                <SearchPageRedux onSubmit={searchPage} pages={pages} currentPage={props.currentPage}/>
            </div>
            {
                props.users.map(u => <div key={u.id} className={classes.wrapper}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} className={classes.avatar}  alt="avatar"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id )} onClick={() => {
                                    props.unfollow(u.id)
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id )} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}

                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>

                </div>)
            }
        </div>
    )
}

const SearchPageRedux = reduxForm({form: "searchPage"})(SearchPageForm)

export default Users