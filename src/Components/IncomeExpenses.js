import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const IncomeExpenses = () => {
  // Accessing transactions array from GlobalContext using useContext hook
  const { transactions } = useContext(GlobalContext);

  // Extracting amounts from transactions
  const amounts = transactions.map(transaction => transaction.amount);

  // Calculating total income
  const income = amounts 
    .filter(item => item > 0) // Filtering positive amounts (income)
    .reduce((acc, item) => (acc += item), 0) // Summing up income amounts
    .toFixed(2); // Formatting to 2 decimal places

  // Calculating total expense
  const expense = (
    amounts.filter(item => item < 0) // Filtering negative amounts (expenses)
      .reduce((acc, item) => (acc += item), 0) * -1 // Summing up expense amounts and converting to positive
  ).toFixed(2); // Formatting to 2 decimal places

  // Returning JSX to display income and expense
  return (
    <div className='income-container'>
      <div>
        <h4>Income</h4>
        <p className='money-plus'>{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money-minus'>{expense}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
