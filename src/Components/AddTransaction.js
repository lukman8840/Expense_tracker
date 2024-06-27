import React, { useContext, useState } from 'react';
import { GlobalContext } from '../Context/GlobalState';

const AddTransaction = () => {
  // State variables for text (transaction description) and amount
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);

  // Accessing addTransaction function from GlobalContext using useContext hook
  const { addTransaction } = useContext(GlobalContext);

  // Function to handle form submission
  const onSubmit = e => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create a new transaction object with random ID, text, and amount
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000), // Random ID generation
      text, // Transaction description entered in the form
      amount: +amount // Amount entered in the form, converted to a number
    };

    // Call addTransaction function from GlobalContext to add newTransaction
    addTransaction(newTransaction);
    
    // Clear the input fields after adding the transaction
    setText('');
    setAmount(0);
  };

  return (
    // Form for adding new transaction
    <div className='add-transact'>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        {/* Input field for transaction description */}
        <div className='form-control'>
          <label htmlFor='text'>Text</label>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Enter text'
          />
        </div>
        {/* Input field for transaction amount */}
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder='Enter amount'
          />
        </div>
        {/* Button to submit the form and add transaction */}
        <button className='btn'>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransaction;
