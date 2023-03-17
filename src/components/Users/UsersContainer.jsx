import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setUsers, unfollow,  toggleFollowingProgress, getUsers } from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { compose } from "redux";


class UsersContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber, this.props.pageSize)
        this.props.setCurrentPage(pageNumber)
    }


    render() {
        return <>
        { this.props.isFetching ? <Preloader /> : <Users totalUserCount={this.props.totalUserCount} 
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            unfollow={this.props.unfollow}
            follow={this.props.follow}
            users={this.props.users}
            followingInProgress={this.props.followingInProgress}

            
        /> }
       
        </>

    }
}


let mapStateToProps = (state) => {
   return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
   } 
}






export default compose(


    connect(mapStateToProps, {
        follow,
        unfollow,
        setUsers,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers,
    })
)(UsersContainer)