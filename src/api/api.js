import axios from "axios"


const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'bc661112-e90b-4c26-ba7d-b08928e75e37'
    },

})




export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(respons => respons.data)
    },
    postFollow(userId) {
        return instans.post(`follow/${userId}`).then(respons => respons.data.resultCode)
    },
    deleteFollow(userId) {
        return instans.delete(`follow/${userId}`).then(respons => respons.data.resultCode)
    }
}


export const authAPI = {
    getAuth() {
        return instans.get(`auth/me`)
    },
    login(email, password, remeberMe) {
        return instans.post(`auth/login`, {email, password, remeberMe})
    },
    logout() {
        return instans.delete(`auth/login`)
    },
}

export const profileAPI = {
    getProfile(userId) {
        return instans.get(`profile/` + userId).then(respons => respons.data)
    },
    getStatus(userId) {
        return instans.get(`profile/status/` + userId)
    },
    updateStatus(status) {
        return instans.put(`profile/status`, {status: status})
    }
}

export default usersAPI
// export default followAPI