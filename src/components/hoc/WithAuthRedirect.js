import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

let mapStateToPropsAuthContainer = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect(Component) {
    const RedirectComponent = (props) => {
        if (props.isAuth === false) return <Redirect to='/login' />
        return (<>
            < Component {...props} />
        </>)
    }
    return connect(mapStateToPropsAuthContainer)(RedirectComponent);
}