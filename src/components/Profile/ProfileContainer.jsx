import React from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import { getUserProfile, getStatus, changeStatus, savePhoto } from './../../Redux/profileReducer'
import { withRouter } from 'react-router-dom'
import { withAuthRedirect } from '../hoc/WithAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId

        if (!userId) {
            userId = this.props.user
            if (!userId) {
                this.props.history.push('/login')
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.userId !== this.props.match.params.userId) {
            let userId = this.props.match.params.userId

            if (!userId) {
                userId = this.props.user
                if (!userId) {
                    this.props.history.push('/login')
                }
            }
            this.props.getUserProfile(userId)
            this.props.getStatus(userId)
        }
    }

    render() {
        return (
            < Profile {...this.props} savePhoto={this.props.savePhoto} isOwnPage={!this.props.match.params.userId} profile={this.props.profile} status={this.props.status} changeStatus={this.props.changeStatus} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        user: state.auth.id
    }
}
export default compose(
    connect(mapStateToProps, { getUserProfile, getStatus, changeStatus, savePhoto }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)