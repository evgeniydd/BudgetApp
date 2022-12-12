import React from 'react';
import '../App.css';

const RemainingAmount = (props) => {
  const totalExpenses = props.expenses.reduce((total, item) => {
    return (total = total + item.cost);
  }, 0);

  const alertType = totalExpenses > props.budget ? 'alert-danger' : 'alert-success';
  return (
    <div className={`amount-box remaining-amount ${alertType}`}>
      <p>Remaining: ${props.budget - totalExpenses}</p>
    </div>
  );
};

export default RemainingAmount;
