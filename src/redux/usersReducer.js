const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS"


let initialState = {
    users: [
/*         {id: 1, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg', followed: true, fullName: "Nasya", status: "I am KAKA", location: {city: "Krasnoyarsk", country: "Russia"}},
        {id: 2, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg', followed: true, fullName: "Danya", status: "I am boss", location: {city: "Minsk", country: "Belarus"}},
        {id: 3, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg', followed: false, fullName: "Sonya", status: "I am KAKA", location: {city: "Krasnoyarsk", country: "Russia"}},
        {id: 4, photoUrl: 'https://pixelbox.ru/wp-content/uploads/2021/10/dark-avatar-vk-pixelbox.ru-2.jpg', followed: false, fullName: "Busya", status: "I am KAKA", location: {city: "Krasnoyarsk", country: "Russia"}} */
    ]
}


const usersReduser = (state = initialState, action) =>{
    switch(action.type){
        case FOLLOW:
            debugger
            return{
                ...state,
                users: state.users.map(u =>{
                    if (u.id === action.userId) {
                        return{...u, followed: true}
                    }
                    return u;                 
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u =>{
                    if (u.id === action.userId) {
                        return{...u, followed: false}
                    }
                    return u;                 
                })
            }
        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }   
        default:
            return state;
    }

}



export const followAC = (userId) =>({type: FOLLOW, userId})
export const unfollowAC = (userId) =>({type: UNFOLLOW, userId})
export const setUsersAC = (users) =>({type: SET_USERS, users})

export default usersReduser;