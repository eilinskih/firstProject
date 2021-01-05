import { connect } from "react-redux";
import { followActionCreator, setUsersActionCreator, unfollowActionCreator } from "../../Redux/usersReducer";
import Users from "./Users"


let mapStateToProps = (state) => {
    return{
    usersPage: state.usersPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    follow: () => {
        dispatch(followActionCreator(userId))
    },
    unfollow: () => {
        dispatch(unfollowActionCreator(userId))
    },
    setUsers: () => {
        dispatch(setUsersActionCreator(users))
    }
}
}




export default connect(mapStateToProps, mapDispatchToProps)(Users)