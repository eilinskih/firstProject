import { createSelector } from "reselect"

export const getUsersList = (state) => {
  return  state.usersPage.users
} 

export const getPageSize = (state) => {
    return state.usersPage.pageSize
}

export const getTotalCountUsers = (state) => {
    return state.usersPage.totalCountUsers
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}

export const getIsFetchingValue = (state) => {
    return state.usersPage.isFetchingValue
}

export const getFollowFetching = (state) => {
    return state.usersPage.followFetching
}

export const followSelector = createSelector(getFollowFetching, (followFetching) => {
    return followFetching
} )

