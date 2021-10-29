import { createSelector } from "reselect"
import { StateType } from "./redux-store"

export const getUsersList = (state: StateType) => {
    return state.usersPage.users
}

export const getPageSize = (state: StateType) => {
    return state.usersPage.pageSize
}

export const getTotalCountUsers = (state: StateType) => {
    return state.usersPage.totalCountUsers
}

export const getCurrentPage = (state: StateType) => {
    return state.usersPage.currentPage
}

export const getIsFetchingValue = (state: StateType) => {
    return state.usersPage.isFetchingValue
}

export const getFollowFetching = (state: StateType) => {
    return state.usersPage.followFetching
}

export const getCurrentPortion = (state: StateType) => {
    return state.usersPage.currentPortion
}

export const followSelector = createSelector(getFollowFetching, (followFetching) => {
    return followFetching
})

