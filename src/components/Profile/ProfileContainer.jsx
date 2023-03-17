import React from "react";
import Profile from "./Profile.jsx";
import { getProfile } from "../../redux/profileReducer"
import { connect } from "react-redux";
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect.js";
import { compose } from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        if (!userId) {
            userId = 3;
        }
        this.props.getProfile(userId)
    }



    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
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
    connect(mapStateToProps,  {getProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);