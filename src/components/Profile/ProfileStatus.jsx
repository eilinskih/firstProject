import React from 'react';



class ProfileStatus extends React.Component {
state = {
    changingStatus: false,
    status: this.props.status
}

changingStatusActive = () => {
    this.setState({
     changingStatus: true   
    })
}

changingStatusStop = () => {
    this.setState({
     changingStatus: false  
    })
    this.props.changeStatus(this.state.status)
}

statusChange = (e) => {
this.setState({
    status: e.currentTarget.value
})
}

componentDidUpdate(prevProps, prevState) {
if (prevProps.status !== this.props.status){
    this.setState({
        status: this.props.status
    })
}
}

    render() {
    return <> {this.state.changingStatus ?
            (<div><input onChange={this.statusChange} onBlur={this.changingStatusStop} type="text" autoFocus={true} value={this.state.status} /></div>)
        :(<div><span onDoubleClick={this.changingStatusActive}>{this.props.status || "add something"}</span></div>)}
        </>
    }
}
   

export default ProfileStatus ;