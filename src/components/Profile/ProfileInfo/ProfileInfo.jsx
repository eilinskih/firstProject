import React from 'react';
import p from './ProfileInfo.module.css';


function ProfileInfo(props) {
    return  (
        <div className={p.grid}>
          <div className={p.avatar}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSuPH7B65eKM-W4rrjLd_BTkw6-W8jVlHlXrOfKjeCxO2bUCt0&usqp=CAU" alt="pulya" /></div>
          <div className={p.description}>{props.description}</div>
    <div className={p.name}>{props.username}</div>
          </div>
    );
}

export default ProfileInfo ;