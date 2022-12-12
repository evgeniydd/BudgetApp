import React, { useState } from 'react';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const TotalAmount = (props) => {
  const [edit, setEdit] = useState(false);

  const getEdit = () => {
    setEdit(true);
  };
  const saveEdit = () => {
    setEdit(false);
  };

  return (
    <div className='amount-box total-amount'>
      {edit ? (
        <>
          <input type='text' value={props.budget} onChange={(e) => props.setBudget(e.target.value)} />
          <button onClick={saveEdit} className='btn'>
            <FontAwesomeIcon className='icon' icon={faCircleCheck} />
          </button>
        </>
      ) : (
        <>
          <p>${props.budget}</p>
          <button onClick={getEdit} className='btn'>
            <FontAwesomeIcon className='icon' icon={faPenToSquare} />
          </button>
        </>
      )}
    </div>
  );
};

export default TotalAmount;
