import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";
const SET_LOGIN_USER_DATA = "SET_LOGIN_USER_DATA"


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    rememberMe: false

};

const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case SET_LOGIN_USER_DATA: {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        default:
            return state
    }


}

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: { userId, email, login } })
export const setLoginUserData = (email, password, rememberMe) => ({ type: SET_LOGIN_USER_DATA, data: { email, password, rememberMe } })

export const authMe = () => {
    return (dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    let { id, login, email } = response.data;
                    dispatch(setAuthUserData(id, login, email))
                }
            });
    }
}


export const authLogin = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.authLogin()
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setAuthUserData(email, password, rememberMe))
                }
            });
    }
}





export default authReducer