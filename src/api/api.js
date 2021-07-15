import * as axios from 'axios'


let instanceAxios = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "55037afb-e05e-41fe-90ed-2627a5f335b2" }
})

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 5) {
    return instanceAxios.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data
      });
  },

  unfollowUser(id) {
    return instanceAxios.delete(`follow/${id}`)
      .then(response => {
        return response.data
      })
  },

  followUser(id) {
    return instanceAxios.post(`follow/${id}`, {})
      .then(response => {
        return response.data
      })
  },

  getUserProfile(userId) {
    return profileAPI.getUserProfile(userId)
  }
}

export const profileAPI = {

  getUserProfile(userId) {
    return instanceAxios.get(`profile/` + userId)
      .then(response => {
        return response.data
      })
  },

  getStatus(userId) {
    return instanceAxios.get('profile/status/' + userId)
      .then(response => response.data)
  },

  setStatus(status) {
    return instanceAxios.put('profile/status', { status: status })
  },

  savePhoto(file) {
    const formData = new FormData();
    formData.append('image', file)
    return instanceAxios.put('profile/photo', formData, { headers: { 'Content-type': 'multipart/form-data' } })
  }
}

export const authAPI = {

  me() {
    return instanceAxios.get(`auth/me`)
      .then(response => response.data)
  },

  login(email, password, rememberMe) {
    return instanceAxios.post('auth/login', { email, password, rememberMe })

  },

  logout() {
    return instanceAxios.delete('auth/login')
      .then(response => response.data)
  }
}
