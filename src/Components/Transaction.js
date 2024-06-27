import React, { useContext } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const Transaction = ({ transaction }) => {
  // Accessing deleteTransaction function from GlobalContext using useContext hook
  const { deleteTransaction } = useContext(GlobalContext);

  // Determining sign based on transaction amount to display either income or expense
  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    // Rendering each transaction item with conditional styling and delete button
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {/* Displaying transaction text and formatted amount */}
      {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span>
      {/* Delete button triggers deleteTransaction function with transaction id */}
      <button onClick={() => deleteTransaction(transaction.id)} className='delete-btn'>X</button>
    </li>
  );
}

export default Transaction;
