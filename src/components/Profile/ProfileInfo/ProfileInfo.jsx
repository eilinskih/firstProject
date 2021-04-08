import React from 'react';
import Preloader from '../../Preloader/Preloader';
import p from './ProfileInfo.module.css';
import ProfileStatus from '../ProfileStatus'



function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={p.grid}>
            <div className={p.avatar}><img src={props.profile.photos.large} alt='avatar' />
                <ProfileStatus status={props.status} changeStatus={props.changeStatus}/>
            </div>
            <div className={p.description}>{props.profile.lookingForAJobDescription}</div>
            <div className={p.name}>{props.profile.fullName}</div>
        </div>
    );
}

export default ProfileInfo;