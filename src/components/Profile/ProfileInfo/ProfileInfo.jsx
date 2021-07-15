import React from 'react';
import Preloader from '../../Preloader/Preloader';
import p from './ProfileInfo.module.css';
import ProfileStatusHooks from '../ProfileStatusHooks'
import profilePhoto from './../../../assets/images/profile.png'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    let onPhotoChanged = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }

    return (
        <div className={p.grid}>
            <div className={p.name}>{props.profile.fullName}</div>
            <div className={p.avatar}><img src={props.profile.photos.large || profilePhoto} alt='avatar' />
                {props.isOwnPage && <div>
                    <input type='file' id="input__file" className={p.inputFile} onChange={onPhotoChanged} />
                    <label for="input__file" className={p.inputButton}><span className={p.inputText}>CHANGE PHOTO</span></label>
                </div>}
                <ProfileStatusHooks status={props.status} changeStatus={props.changeStatus} />
            </div>
            <div className={p.description}>{props.profile.lookingForAJobDescription}</div>
        </div>
    );
}

export default ProfileInfo;