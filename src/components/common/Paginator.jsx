import React, { useState } from "react"
import u from './../Users/Users.module.css';

const Paginator = ({ totalCountItems, pageSize, currentPage, currentPortion, onPageClick, portionSize = 5 }) => {

  let pageNumber = Math.ceil(totalCountItems / pageSize)
  let pages = [];
  for (let i = 1; i <= pageNumber; i++) {
    pages.push(i)
  };
  let portionCount = Math.ceil(pageNumber / portionSize);
  let [portionNumber, setPortionNumber] = useState(currentPortion)
  let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
  let rightPortionPageNumber = portionNumber * portionSize;
  return (
    <div>
      {portionNumber > 1 && <button onClick={() => setPortionNumber(portionNumber - 1)}>pre</button>}
      {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber).map(p => {
        return <span className={currentPage === p && u.selectedPage} onClick={(e) => { onPageClick(p, portionNumber) }}>{p}</span>
      })}
      {portionCount > portionNumber && <button onClick={() => setPortionNumber(portionNumber + 1)}>next</button>}
    </div>)
}
export default Paginator;