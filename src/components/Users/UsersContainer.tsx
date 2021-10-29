import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { compose } from 'redux';

import { getUsers, setPage } from "../../Redux/usersReducer";
import Users from "./Users";
import Preloader from '../Preloader/Preloader';
import { withAuthRedirect } from '../hoc/WithAuthRedirect';
import { getCurrentPage, getIsFetchingValue, getPageSize } from '../../Redux/usersSelectors';

const UsersContainer: React.FC = () => {
    const dispatch = useDispatch();
    const currentPage = useSelector(getCurrentPage);
    const pageSize = useSelector(getPageSize);
    const isFetchingValue = useSelector(getIsFetchingValue);

    useEffect(() => {
        dispatch(getUsers(currentPage, pageSize))
    },[]);

    const onPageClick = (pageNum: number, portionNum: number) => {
        dispatch(setPage(pageNum, portionNum));
        dispatch(getUsers(pageNum, pageSize));
    };

    return (<>
                {isFetchingValue ? <Preloader /> : null}
                <Users onPageClick={onPageClick} />
            </>);
};

export default compose(
    withAuthRedirect
)(UsersContainer);