import { UserItemType, usersAPI } from "../api/api"
import { AppDispatch } from "./redux-store";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SETUSERS = 'SETUSERS';
const SETCURRENTPAGE = 'SETCURRENTPAGE';
const SETTOTALCOUNT = 'SETTOTALCOUNT';
const ISFETCHING = 'ISFETCHING';
const FOLLOWFETCHING = 'FOLLOWFETCHING';

const initialState: UsersStateType = {
    users: [],
    pageSize: 4,
    totalCountUsers: 0,
    currentPage: 1,
    currentPortion: 1,
    isFetchingValue: false,
    followFetching: []
}

type UsersStateType = {
    users: UserItemType[]
    pageSize: number
    totalCountUsers: number
    currentPage: number
    currentPortion: number
    isFetchingValue: boolean
    followFetching: number[]
    
}

const usersReducer = (state: UsersStateType = initialState, action: ActionsType) => {
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
export const follow = (userId: number): FollowType => ({ type: FOLLOW, userId });
type FollowType = {type: typeof FOLLOW, userId: number};
export const unfollow = (userId: number): UnfollowType => ({ type: UNFOLLOW, userId });
type UnfollowType = {type: typeof UNFOLLOW, userId: number};
export const setUsers = (users: UserItemType[]): SetUsersType => ({ type: SETUSERS, users });
type SetUsersType = {type: typeof SETUSERS, users: UserItemType[]};
export const setPage = (page: number, portion: number): SetPageType => ({ type: SETCURRENTPAGE, page, portion });
type SetPageType = {type: typeof SETCURRENTPAGE, page: number, portion: number};
export const setTotalCountUsers = (totalCount: number): SetTotalCountUsersType => ({ type: SETTOTALCOUNT, totalCount });
type SetTotalCountUsersType = {type: typeof SETTOTALCOUNT, totalCount: number};
export const isFetching = (isFetching: boolean): IsFetchingType => ({ type: ISFETCHING, isFetching });
type IsFetchingType = {type: typeof ISFETCHING, isFetching: boolean};
export const isFollowFetching = (isFetching: boolean, userId: number): IsFollowFetchingType => ({ type: FOLLOWFETCHING, isFetching, userId });
type IsFollowFetchingType = { type: typeof FOLLOWFETCHING, isFetching: boolean, userId: number};

type ActionsType = 
| FollowType
| UnfollowType
| SetUsersType
| SetPageType
| SetTotalCountUsersType
| IsFetchingType
| IsFollowFetchingType

//THUNK_CREATORS
export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: AppDispatch) => {
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

export const followUser = (userId: number) => {
    return (dispatch: AppDispatch) => {
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

export const unfollowUser = (userId: number) => {
    return (dispatch: AppDispatch) => {
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