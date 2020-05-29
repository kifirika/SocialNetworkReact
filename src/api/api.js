import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'bd0425f6-c69b-4945-8e14-eb03d93836c3'
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => {
            return response.data;
        });
    }
};

export const followAPI = {
    follow(id){
        return instance.post(`follow/${id}`).then(response => {
            return response.data;
        });
    },
    unfollow(id){
        return instance.delete(`follow/${id}`).then(response => {
            return response.data;
        });
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }
};

export const authAPI = {
    auth() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, {
            email: email, 
            password: password, 
            rememberMe: rememberMe
        });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
};
