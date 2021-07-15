import React, { useEffect, useState } from 'react';



function ProfileStatusHooks(props) {

    const [status, setStatus] = useState(props.status)
    const [changingStatus, setChangingStatus] = useState(false)


    let changingStatusActive = () => {
        setChangingStatus(true)
    }

    let changingStatusStop = () => {
        setChangingStatus(false)

        props.changeStatus(status)
    }

    let statusChange = (e) => {
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