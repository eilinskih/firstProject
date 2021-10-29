import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { followUser, unfollowUser } from '../../Redux/usersReducer';
import { followSelector, getCurrentPage, getCurrentPortion, getPageSize, getTotalCountUsers, getUsersList } from '../../Redux/usersSelectors';
import Paginator from '../common/Paginator';
import profilePhoto from './../../assets/images/user_icon.svg'

type UsersPropsType = {
  onPageClick: (pageNum: number, portionNum: number) => void
}

const Users: React.FC<UsersPropsType> = (props) => {
  const dispatch = useDispatch()
  const users = useSelector(getUsersList)
  const followFetching = useSelector(followSelector)
  const totalCountUsers = useSelector(getTotalCountUsers)
  const pageSize = useSelector(getPageSize)
  const currentPortion = useSelector(getCurrentPortion)
  const currentPage = useSelector(getCurrentPage)

  return <div>
    <Paginator totalCountItems={totalCountUsers} pageSize={pageSize} currentPortion={currentPortion} currentPage={currentPage} onPageClick={props.onPageClick} />
    {users.map(u => <div key={u.id}>
      <NavLink to={'/profile/' + u.id}><div><img src={u.photos.small || profilePhoto} alt='user avatar' /></div></NavLink>
      <div>{u.name}</div>
      <div>{u.status}</div>
      <div>{u.followed ?
        <button disabled={followFetching.some(id => id === u.id)} onClick={() => {
          dispatch(unfollowUser(u.id))
        }
        }>UNFOLLOW</button> :

        <button disabled={followFetching.some(id => id === u.id)} onClick={() => {
          dispatch(followUser(u.id))
        }
        }>FOLLOW</button>}</div>
    </div>)}
  </div>
};



export default Users;


