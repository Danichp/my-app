import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, requiredField } from "../../utils/validators/validators";
import { connect } from "react-redux";
import {authLogin} from "../../redux/auth-reducer"
import { Navigate } from "react-router-dom";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Login"} name={"email"} component={Input} validate={[requiredField,maxLengthCreator(20)]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input} validate={[requiredField, maxLengthCreator(20)]}/>
                </div>
                <div>
                    <Field type={"checkbox"} name={"rememberMe"} component={Input} /> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)
  

const Login = (props) => {
   const onSubmit = (formData) => {
        props.authLogin(formData.email, formData.password, formData.rememberMe)
    }


    if (props.isAuth) {
        return <Navigate to={"/profile/:userId"} />
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {authLogin}) (Login)