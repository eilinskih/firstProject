
import React from 'react';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/Paginator';


function Users(props) {
 
  return <div>
    <Paginator totalCountItems={props.totalCountUsers} pageSize={props.pageSize} currentPage={props.currentPage} onPageClick={props.onPageClick}/>
    {props.users.map(u => <div key={u.id}>
      <NavLink to={'/profile/' + u.id}><div><img src={u.photos.small} alt='user avatar' /></div></NavLink>
      <div>{u.name}</div>
      <div>{u.status}</div>
      <div>{u.followed ?
        <button disabled={props.followFetching.some(id => id === u.id)} onClick={() => {
         props.unfollowUser(u.id)  
        }
        }>UNFOLLOW</button> :

        <button disabled={props.followFetching.some(id => id === u.id)} onClick={() => {
         props.followUser(u.id)
        }
        }>FOLLOW</button>}</div>
    </div>)}
  </div>
};



export default Users;


