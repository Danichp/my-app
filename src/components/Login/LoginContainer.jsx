import React from "react";
import { connect } from "react-redux";
import {authLogin} from "../../redux/auth-reducer";
import Login from "./Login";

class LoginContainer extends React.Component{
    componentDidMount() {
        
    }



    render(){
        return <Login {...this.props} />
    }
}


let mapStateToProps = () => ({
})
export default connect(mapStateToProps, {authLogin}) (LoginContainer)