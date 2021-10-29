import axios from 'axios'
 
export type UserItemType = {
  name: string,
  id: number,
  photos: {
    small: null | string,
    large: null | string
  }, 
  status: null | string,
  followed: boolean
};

type GetUsersResType = {
  items: UserItemType[],
  totalCount: number,
  error: null | string
};

type UnfollowDelete ={
    resultCode: number,
    messages: string[],
    data: object
};

export type GetProfileType = {
  userId: number,
  lookingForAJob: boolean,
  lookingForAJobDescription: string,
  fullName: string,
  contacts: {
    github: string,
    vk: string,
    facebook: string,
    instagram: string,
    twitter: string,
    website: string,
    youtube: string,
    mainLink: string
  },
  photos: PhotosType
};

export type PhotosType = {
  small: null | string,
  large: null | string
};

type MeType = {
    resultCode: number,
    messages: string[],
    data: {
      id: number,
      email: string,
      login: string
    }
};

type LoginType = {
    resultCode: number,
    messages: string[],
    data: {
      userId: number
    }
};

type LogOutType = {
  resultCode: number,
  messages: string[],
  data: object
};

type SetStatusType = {
    resultCode: number
    messages: string[]
    data: object
};

type SavePhotoType = {
  resultCode: number
  messages: string[]
  data: {photos: PhotosType}
};

const instanceAxios = axios.create({
  withCredentials: true,
  baseURL: `https://social-network.samuraijs.com/api/1.0/`,
  headers: { "API-KEY": "55037afb-e05e-41fe-90ed-2627a5f335b2" }
});

export const usersAPI = {
  async getUsers(currentPage = 1, pageSize = 5) {
    const response = await instanceAxios.get<GetUsersResType>(`users?page=${currentPage}&count=${pageSize}`);
    return response.data;
  },

  async unfollowUser(id: number) {
    const response = await instanceAxios.delete<UnfollowDelete>(`follow/${id}`);
    return response.data;
  },

  async followUser(id: number) {
    const response = await instanceAxios.post<UnfollowDelete>(`follow/${id}`, {});
    return response.data;
  },

  getUserProfile(userId: number) {
    return profileAPI.getUserProfile(userId)
  }
}

export const profileAPI = {

  async getUserProfile(userId: number) {
    const response = await instanceAxios.get<GetProfileType>(`profile/` + userId);
    return response.data;
  },

  async getStatus(userId: number) {
    const response = await instanceAxios.get<string>('profile/status/' + userId);
    return response.data;
  },

  setStatus(status: string) {
    return instanceAxios.put<SetStatusType>('profile/status', { status: status })
  },

  savePhoto(file: string) {
    const formData = new FormData();
    formData.append('image', file)
    return instanceAxios.put<SavePhotoType>('profile/photo', formData, { headers: { 'Content-type': 'multipart/form-data' } })
  }
}

export const authAPI = {

  async me() {
    const response = await instanceAxios.get<MeType>(`auth/me`);
    return response.data;
  },

  async login(email: string, password: string, rememberMe: boolean) {
    const response = await instanceAxios.post<LoginType>('auth/login', { email, password, rememberMe });
    return response.data
  },

  async logout() {
    const response = await instanceAxios.delete<LogOutType>('auth/login');
    return response.data;
  }
}
