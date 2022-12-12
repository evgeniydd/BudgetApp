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
      <h1 className='app-title'>myWallet</h1>
      <div className='main-content'>
        <div className='total-wrap'>
          <p className='balance-title'>Total Balance</p>
          <div>
            <TotalAmount budget={initialState.budget} setBudget={setBudget} />
          </div>
          <div className='expenses-box'>
            <RemainingAmount expenses={expenseItem} budget={initialState.budget} />
            <SpentAmount expenses={expenseItem} />
          </div>
          <div className='expense-box'>
            <h2>Expenses</h2>
            <input type='text' placeholder='Type to search...' onChange={getSearch} autoComplete='off' />
            <div className='items-box'>
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
          </div>
        </div>
        <div className='expense-form'>
          <h2>Add Expense</h2>
          <form className='form' onSubmit={onSubmit}>
            <div className='form-input'>
              <div>
                <label htmlFor='name'>Name</label>
                <input
                  autoComplete='off'
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type='text'
                  name='itemName'
                  id='name'
                />
              </div>

              <div>
                <label htmlFor='cost'>Cost</label>
                <input
                  autoComplete='off'
                  value={cost}
                  onChange={(event) => setCost(event.target.value)}
                  type='text'
                  name='itemCost'
                  id='cost'
                />
              </div>
            </div>
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
