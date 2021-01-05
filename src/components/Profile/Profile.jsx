import React from 'react';
import p from './Profile.module.css';
import PostsContainer from './Posts/PostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return (<div>
        <div className={p.image}><img alt='some img' src='https://media.sproutsocial.com/uploads/2018/04/Facebook-Ad-Sizes.png'></img></div>
        <div className={p.grid}>
            < ProfileInfo username='Someone User' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi!' />

            <div className={p.posts}>
                <PostsContainer />
            </div>
        </div>
    </div>

    );
}

export default Profile;