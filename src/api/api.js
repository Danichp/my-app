import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        "API-KEY": "5209332a-3a89-49d4-b7de-53f8b03e1d57"
    }
})


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    follow(userId){
        return instance.post(`follow/${userId}`)
    },
    unfollow(userId){
        return instance.delete(`follow/${userId}`)
    }
}


export const profileAPI = {
    getProfile(userId){
        return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data;
            
        });
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
        .then(response => {
            return response.data;
            
        });
    },
    updateStatus(status){
        return instance.put(`profile/status`, { status: status})
        .then(response => {
            return response.data;
            
        });
    },
}

export const authAPI = {
    authMe(){
        return instance.get(`auth/me`,)
        .then(response => {
            return response.data;
            
        });
    }
}