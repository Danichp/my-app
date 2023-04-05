import React from "react";
import Profile from "./Profile.jsx";
import { getProfile, getStatus, updateStatus } from "../../redux/profileReducer"
import { connect } from "react-redux";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() { 
        debugger
        let userId = +this.props.router.params.userId
        if (userId == NaN) {
            userId = 27800;
        }
        this.props.getProfile(userId)
        this.props.getStatus(userId)
        
    }



    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});


function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps,  {getProfile, getStatus, updateStatus}),
    withRouter
)(ProfileContainer);