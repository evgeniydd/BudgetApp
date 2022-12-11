import React from 'react';
import '../App.css';

const SpentAmount = (props) => {
  const totalExpenses = props.expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);
  return (
    <div className='amount-box spent-amount'>
      <p>Spent so far: {totalExpenses}</p>
    </div>
  );
};

export default SpentAmount;
