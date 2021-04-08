import React from 'react';
import p from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return (<div>
        <div className={p.grid}>
            < ProfileInfo profile={props.profile} status={props.status} changeStatus={props.changeStatus} />

            <div className={p.posts}>
                <PostsContainer />
            </div>
        </div>
    </div>

    );
}

export default Profile;