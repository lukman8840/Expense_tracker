import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer'; // Importing the AppReducer

// Initial state for transactions
const initialState = {
    transactions: []
}

// Create context with initial state
export const GlobalContext = createContext(initialState);

// Provider component that wraps the entire application
export const GlobalProvider = ({ children }) => {
    // useReducer hook to manage state transitions with AppReducer
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Action to delete a transaction by ID
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    // Action to add a new transaction
    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    // Providing state and actions to components via context
    return (
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children} {/* Render children components */}
        </GlobalContext.Provider>
    );
}
