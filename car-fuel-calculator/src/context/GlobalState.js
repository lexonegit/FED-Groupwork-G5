import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
const initialState = {
  expenses: [
    { id: 1, carName: 'Car 1', amount: 60, cost: 30, },
    { id: 2, carName: 'Car 2', amount: 100, cost: 50, },
    { id: 3, carName: 'Car 1', amount: 120, cost: 60, },
    { id: 4, carName: 'Car 2', amount: 30, cost: 15, },
  ],
  cars: [
    { id: 1, carName: 'Auto 1' },
    { id: 2, carName: 'Auto 2' },
    { id: 3, carName: 'Auto 3' },
  ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) =>
{
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteExpense(id)
  {
    dispatch({
      type: 'DELETE_EXPENSE',
      payload: id
    });
  }

  function addExpense(expense)
  {
    dispatch({
      type: 'ADD_EXPENSE',
      payload: expense
    });
  }

  return (<GlobalContext.Provider value={{
    expenses: state.expenses,
    deleteExpense,
    addExpense
  }}>
    {children}
  </GlobalContext.Provider>)
}
