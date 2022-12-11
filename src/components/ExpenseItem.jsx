import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

const ExpenseItem = (props) => {
  return (
    <div className='expense-item'>
      <p>{props.name}</p>
      <div className='expense-value'>
        <div className='price'>{props.cost}$</div>
        <div onClick={props.deletedItem}>
          <FontAwesomeIcon className='icon' icon={faXmark} />
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
