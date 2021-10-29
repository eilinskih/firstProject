import React, { ChangeEvent } from 'react';

import Preloader from '../../Preloader/Preloader';
import p from './ProfileInfo.module.css';
import ProfileStatusHooks from '../ProfileStatusHooks'
import profilePhoto from './../../../assets/images/profile.png'
import { GetProfileType } from '../../../api/api';
import { useDispatch } from 'react-redux';
import { savePhoto } from './../../../Redux/profileReducer';

type ProfileInfoPropsType = {
    profile: GetProfileType | null
    isOwnPage: boolean
    status: string
};


const ProfileInfo: React.FC<ProfileInfoPropsType> = (props) => {
    const dispatch = useDispatch();

    const onPhotoChanged = (e: ChangeEvent<HTMLInputElement>) => {
        const file: any = (e.target.files as FileList)[0];
        if ((e.target.files as FileList).length) {
            dispatch(savePhoto(file));
        };
    };

    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={p.grid}>
            <div className={p.name}>{(props.profile as GetProfileType).fullName}</div>
            <div className={p.avatar}><img src={(props.profile as GetProfileType).photos.large || profilePhoto} alt='avatar' />
                {props.isOwnPage && <div>
                    <input type='file' id="input__file" className={p.inputFile} onChange={onPhotoChanged} />
                    <label htmlFor="input__file" className={p.inputButton}><span className={p.inputText}>CHANGE PHOTO</span></label>
                </div>}
                <ProfileStatusHooks status={props.status} />
            </div>
            <div className={p.description}>{(props.profile as GetProfileType).lookingForAJobDescription}</div>
        </div>
    );
};

export default ProfileInfo;