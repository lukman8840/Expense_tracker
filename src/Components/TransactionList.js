import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';
import Transaction from './Transaction';

const TransactionList = () => {
  // Accessing transactions array from GlobalContext using useContext hook
  const { transactions } = useContext(GlobalContext);

  // Returning JSX to display transaction list
  return (
    <div className='transaction'>
      <h3>History</h3>
      <hr />
      <ul className='list'>
        {/* Mapping through transactions array to render each transaction */}
        {transactions.map(transaction => (
          // Using Transaction component to render each transaction item
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
