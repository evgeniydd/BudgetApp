import React, { useState } from 'react';
import '../App.css';

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
            Save
          </button>
        </>
      ) : (
        <>
          <p>Budget: {props.budget}$</p>
          <button onClick={getEdit} className='btn'>
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default TotalAmount;
