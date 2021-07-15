import React from 'react';
import { connect } from "react-redux";
import { followUser, getUsers, setPage, setUsers, setTotalCountUsers, unfollowUser } from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from '../Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { followSelector, getCurrentPage, getCurrentPortion, getIsFetchingValue, getPageSize, getTotalCountUsers, getUsersList } from '../../Redux/usersSelectors';

class UsersContainerClass extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }


    onPageClick = (pageNum, portionNum) => {
        this.props.setPage(pageNum, portionNum);
        this.props.getUsers(pageNum, this.props.pageSize);

    }

    render() {

        return <>
            {this.props.isFetchingValue ? <Preloader /> : null}
            <Users totalCountUsers={this.props.totalCountUsers} pageSize={this.props.pageSize} currentPage={this.props.currentPage} currentPortion={this.props.currentPortion} onPageClick={this.onPageClick} users={this.props.users} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} followFetching={this.props.followFetching} />
        </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsersList(state),
        pageSize: getPageSize(state),
        totalCountUsers: getTotalCountUsers(state),
        currentPage: getCurrentPage(state),
        currentPortion: getCurrentPortion(state),
        isFetchingValue: getIsFetchingValue(state),
        followFetching: followSelector(state)
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         follow: (userId) => {
//             dispatch(followActionCreator(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowActionCreator(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users));
//         },
//         setPage: (page) => {
//             dispatch(setCurrentPageActionCreator(page));
//         },
//         setTotalCountUsers: (totalCount) => {
//             dispatch(setTotalCountUsersActionCreator(totalCount));
//         },
//         isFetching: (isFetching) => {
//             dispatch(isFetchingActionCreator(isFetching));
//         }
//     };
// }




export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        followUser,
        unfollowUser,
        setUsers,
        setPage,
        setTotalCountUsers,
        getUsers
    })
)(UsersContainerClass)