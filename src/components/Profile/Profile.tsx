import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProfile, getStatus } from '../../Redux/profileReducer';
import p from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import { StateType } from '../../Redux/redux-store';

const Profile: React.FC<any> = (props) => {
    const dispatch = useDispatch();
    const {profilePage, user} = useSelector((state: StateType) => {
        return {profilePage: state.profilePage, user: state.auth.id}
    });
    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = user
            if (!userId) {
                props.history.push('/login')
            }
        };
        dispatch(getUserProfile(userId));
        dispatch(getStatus(userId));
    }, [props.match.params.userId]); 

        return (<div>
            <div className={p.grid}>
                < ProfileInfo profile={profilePage.profile}  isOwnPage={!props.match.params.userId} status={profilePage.status} />
    
                <div className={p.posts}>
                    <Posts profilePage={profilePage} />
                </div>
            </div>
        </div>
        );
}

export default Profile;


