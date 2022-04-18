import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial state
// const initialState = {
//   expenses: [
//     { id: 1, carName: 'Auto 1', amount: 60, cost: 30, distance: 0, },
//     { id: 2, carName: 'Auto 2', amount: 100, cost: 50, distance: 0, },
//     { id: 3, carName: 'Auto 1', amount: 120, cost: 60, distance: 0, },
//     { id: 4, carName: 'Auto 2', amount: 30, cost: 15, distance: 0, },
//   ],
//   cars: [
//     { id: 1, carName: 'Auto 1' },
//     { id: 2, carName: 'Auto 2' },
//     { id: 3, carName: 'Auto 3' },
//   ]
// }

function saveToLocalStorage(state)
{
  const json_string = JSON.stringify(state);
  localStorage.setItem('state', json_string);
}

const loadFromLocalStorage = () =>
{
  let state = {
    expenses: [],
    cars: []
  };

  const json_string = localStorage.getItem('state');
  console.log(json_string);
  if ( json_string )
  {
    state = JSON.parse(json_string);
  }

  return state;
};


// load state from local storage or create new object
const initialState = loadFromLocalStorage();
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

  function addCar(car) {
    dispatch({
      type: 'ADD_CAR',
      payload: car
    });
  }

  return (<GlobalContext.Provider value={{
    expenses: state.expenses,
    cars: state.cars,
    deleteExpense,
    addExpense,
    addCar,
  }}>
    {saveToLocalStorage(state)}
    {children}
  </GlobalContext.Provider>)
}
