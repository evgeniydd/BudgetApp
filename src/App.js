import './App.css';

import TotalAmount from './components/TotalAmount';
import RemainingAmount from './components/RemainingAmount';
import SpentAmount from './components/SpentAmount';
import ExpenseItem from './components/ExpenseItem';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [budget, setBudget] = useState(8000);
  const initialState = {
    budget: budget,
    expenses: [
      { id: 1, name: 'iPhone', cost: 2100 },
      { id: 2, name: 'MacBook', cost: 1250 },
      { id: 4, name: 'Banana', cost: 50 },
      { id: 5, name: 'Car', cost: 250 },
    ],
  };

  const [expenseItem, setExpenseItem] = useState(initialState.expenses);

  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [searchItem, setSearchItem] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    const expense = {
      id: uuidv4(),
      name: name,
      cost: parseInt(cost),
    };

    setExpenseItem([...expenseItem, expense]);
  };

  const deleteItem = (itemm) => {
    const newExpense = [...expenseItem];

    const blabla = newExpense.filter((expense) => expense.id != itemm);

    setExpenseItem(blabla);
  };

  const getSearch = (e) => {
    setSearchItem(e.target.value);
  };

  return (
    <div className='app-container'>
      <h1>My Budget Planner</h1>
      <div className='calculate-box'>
        <TotalAmount budget={initialState.budget} setBudget={setBudget} />
        <RemainingAmount expenses={expenseItem} budget={initialState.budget} />
        <SpentAmount expenses={expenseItem} />
      </div>
      <div className='expense-box'>
        <h2>Expenses</h2>
        <input type='text' placeholder='Type to search...' onChange={getSearch} />
        {expenseItem
          .filter((val) => {
            if (searchItem == '') {
              return val;
            } else if (val.name.toLowerCase().includes(searchItem.toLowerCase())) {
              return val;
            }
          })
          .map((item, index) => (
            <ExpenseItem name={item.name} cost={item.cost} key={index} deletedItem={() => deleteItem(item.id)} />
          ))}
      </div>
      <div className='expense-form'>
        <h2>Add Expense</h2>
        <form className='form' onSubmit={onSubmit}>
          <div className='form-input'>
            <div>
              <label htmlFor='name'>Name</label>
              <input value={name} onChange={(event) => setName(event.target.value)} type='text' name='itemName' id='name' />
            </div>

            <div>
              <label htmlFor='cost'>Cost</label>
              <input value={cost} onChange={(event) => setCost(event.target.value)} type='text' name='itemCost' id='cost' />
            </div>
          </div>
          <button type='submit'>Save</button>
        </form>
      </div>
    </div>
  );
}

export default App;
