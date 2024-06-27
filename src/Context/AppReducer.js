const AppReducer = (state, action) => {
    switch(action.type) {
        case 'DELETE_TRANSACTION':
            // Filter out the transaction with the specified ID from the transactions array
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            };

        case 'ADD_TRANSACTION':
            // Add a new transaction to the beginning of the transactions array
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            };

        // Add additional case statements for other actions if needed

        default:
            return state;
    }
};

export default AppReducer;
