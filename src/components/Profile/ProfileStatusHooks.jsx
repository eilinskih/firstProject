import React, { useEffect, useState } from 'react';



function ProfileStatusHooks(props) {

const [status, setStatus] = useState(props.status)
const [changingStatus, setChangingStatus] = useState(false)


changingStatusActive = () => {
     setChangingStatus(true)    
}

changingStatusStop = () => {
    setChangingStatus(false)    

    props.changeStatus(status)
}

statusChange = (e) => {
    setStatus(e.currentTarget.value)
}

useEffect(() => {
    setStatus(props.status)
  
}, [props.status])

    return (
    <> {changingStatus ?
            (<div><input onChange={statusChange} onBlur={changingStatusStop} type="text" autoFocus={true} value={state.status} /></div>)
        :(<div><span onDoubleClick={changingStatusActive}>{props.status || "add something"}</span></div>)}
        </>)
    
}
   

export default ProfileStatusHooks ;