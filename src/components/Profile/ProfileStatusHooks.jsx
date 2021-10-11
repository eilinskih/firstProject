import React, { useEffect, useState } from 'react';



function ProfileStatusHooks(props) {

    let [status, setStatus] = useState(props.status)
    let [changingStatus, setChangingStatus] = useState(false)


    const changingStatusActive = () => {
        setChangingStatus(true)
    }

    const changingStatusStop = () => {
        setChangingStatus(false)
        props.changeStatus(status)
    }

    const statusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <> {changingStatus ?
            (<div><input onChange={statusChange} onBlur={changingStatusStop} type="text" autoFocus={true} value={status} /></div>)
            : (<div><span onDoubleClick={changingStatusActive}>{props.status || "add something"}</span></div>)}
        </>)

}


export default ProfileStatusHooks;