import { usersAPI } from "./../api/api"

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const SETTOTALCOUNT = 'SETTOTALCOUNT';
const ISFETCHING = 'ISFETCHING';
const FOLLOWFETCHING = 'FOLLOWFETCHING'

let initialState = {
    users: [],
    pageSize: 4,
    totalCountUsers: 0,
    currentPage: 1,
    currentPortion: 1,
    isFetchingValue: false,
    followFetching: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            };
        case SETUSERS:
            return {
                ...state,
                users: action.users
            };
        case SETCURRENTPAGE:
            return {
                ...state,
                currentPage: action.page,
                currentPortion: action.portion
            }
        case SETTOTALCOUNT:
            return {
                ...state,
                totalCountUsers: action.totalCount
            }
        case ISFETCHING:
            return {
                ...state,
                isFetchingValue: action.isFetching
            }

        case FOLLOWFETCHING:
            return {
                ...state,
                followFetching: action.isFetching ?
                    [...state.followFetching, action.userId]
                    : state.followFetching.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
};
// ACTION_CREATORS
export const follow = (userId) => ({ type: FOLLOW, userId })
export const unfollow = (userId) => ({ type: UNFOLLOW, userId })
export const setUsers = (users) => ({ type: SETUSERS, users })
export const setPage = (page, portion) => ({ type: SETCURRENTPAGE, page, portion })
export const setTotalCountUsers = (totalCount) => ({ type: SETTOTALCOUNT, totalCount })
export const isFetching = (isFetching) => ({ type: ISFETCHING, isFetching })
export const isFollowFetching = (isFetching, userId) => ({ type: FOLLOWFETCHING, isFetching, userId })


//THUNK_CREATORS
export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isFetching(true));
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(isFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalCountUsers(data.totalCount))
            }
            )
    }
}

export const followUser = (userId) => {
    return (dispatch) => {
        dispatch(isFollowFetching(true, userId));
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(follow(userId))
                }
                dispatch(isFollowFetching(false, userId))
            })
    }
}

export const unfollowUser = (userId) => {
    return (dispatch) => {
        dispatch(isFollowFetching(true, userId));
        usersAPI.unfollowUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unfollow(userId))
                }
                dispatch(isFollowFetching(false, userId))
            })
    }
}

export default usersReducer;