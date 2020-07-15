import React from 'react';
import p from './Profile.module.css';
import Posts from './Posts/Posts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile(props) {
    return  (
        <div className={p.grid}>
            < ProfileInfo username='Someone User' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, eligendi!' />
          
          <div className={p.posts}>
          <Posts posts={props.profilePage.posts} newPostText={props.profilePage.newPostText} dispatch= {props.dispatch}/>
          </div>
          </div>

    );
}

export default Profile ;