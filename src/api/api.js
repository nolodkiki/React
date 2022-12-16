import axios from "axios"


const instans = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'bc661112-e90b-4c26-ba7d-b08928e75e37'
    },

})


export const followedAPI = {
    postFollow(userId) {
        return instans.post(`follow/${userId}`).then(respons => respons.data)
    },
    deleteFollow(userId) {
        return instans.delete(`follow/${userId}`).then(respons => respons.data.resulCode)
    }
}



export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(respons => respons.data)
    }
}


export default usersAPI
// export default followAPI