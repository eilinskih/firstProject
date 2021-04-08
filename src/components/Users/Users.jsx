
import React from 'react';
import { NavLink } from 'react-router-dom';
import u from './Users.module.css';


function Users(props) {
  let pageNumber = Math.ceil(props.totalCountUsers / props.pageSize)
  let pages = [];
  for (let i = 1; i <= pageNumber; i++) {
    pages.push(i)
  };
  return <div>
    <div>

      {pages.map(p => {
        return <span className={props.currentPage === p && u.selectedPage} onClick={(e) => { props.onPageClick(p) }}>{p}</span>
      })}
    </div>
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


