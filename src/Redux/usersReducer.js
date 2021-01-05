let initialState = {
    users: [
        { id: 1, followed: false, name: Eugen, location: { city: Kharkiv, country: Ukraine } }
    ]

}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            };
        case 'UNFOLLOW':
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            };
        case 'SETUSERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}
export const followActionCreator = (userId) => ({ type: 'FOLLLOW', userId })
export const unfollowActionCreator = (userId) => ({ type: 'UNFOLLOW', userId })
export const setUsersActionCreator = (users) => ({ type: 'SETUSERS', users })
export default usersReducer;