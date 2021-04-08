import React from 'react';
import { connect } from "react-redux";
import { followUser, getUsers, setPage, setUsers, setTotalCountUsers, unfollowUser} from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from '../Preloader/Preloader';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';

class UsersContainerClass extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
      }
    
  
    onPageClick = (pageNum) => {
      this.props.setPage(pageNum);
     this.props.getUsers(pageNum, this.props.pageSize)
    }

    render() {

       return <>
       {this.props.isFetchingValue ? <Preloader/> : null}
       <Users totalCountUsers={this.props.totalCountUsers} pageSize={this.props.pageSize} currentPage={this.props.currentPage} onPageClick={this.onPageClick} users={this.props.users} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} followFetching={this.props.followFetching}/>
    </>
    }
}
  

let mapStateToProps = (state) => {
    return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalCountUsers: state.usersPage.totalCountUsers,
    currentPage: state.usersPage.currentPage,
    isFetchingValue: state.usersPage.isFetchingValue,
    followFetching: state.usersPage.followFetching
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