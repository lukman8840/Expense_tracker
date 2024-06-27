import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Balance = () => {
  // Accessing transactions array from GlobalContext using useContext hook
  const { transactions } = useContext(GlobalContext);

  // Extracting amounts from transactions
  const amounts = transactions.map(transaction => transaction.amount);

  // Calculating total balance by summing up all amounts
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    // Rendering balance component
    <div className='balance'>
      <h4>Your Balance</h4>
      {/* Displaying total balance amount formatted as currency */}
      <h1>${total}</h1>
    </div>
  );
}

export default Balance;
