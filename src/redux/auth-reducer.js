import { authAPI } from "../api/api";

const SET_USER_DATA = "SET_USER_DATA";


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false

};

const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload,
            }
        }
        default:
            return state
    }


}

export const setAuthUserData = (userId, email, login, isAuth) => ({ type: SET_USER_DATA, payload: { userId, email, login, isAuth } })

export const authMe = () => (dispatch) => {
        authAPI.authMe()
            .then(response => {
                if (response.resultCode === 0) {
                    let { id, login, email } = response.data;
                    dispatch(setAuthUserData(id, login, email, true))
                }
            });
    }



export const authLogin = (email, password, rememberMe, captcha) => {
    return (dispatch) => {
        authAPI.authLogin(email, password, rememberMe, captcha)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(authMe())
                }
            });
    }
}

export const authLogout = () => {
    return (dispatch) => {
        authAPI.authLogout()
            .then(response => {
                debugger
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }

            })
    }
}





export default authReducer