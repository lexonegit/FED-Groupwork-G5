import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const RefuelHistory = () =>
{
  const { expenses } = useContext(GlobalContext);

  return (
    <div>
      <h4>Refueling history</h4>
      {expenses.map(expense => (
        <div key={expense.id} className="history-element-div">
      
          <p>
            <b>{expense.carName}</b>
          </p>
          <p>{expense.amount}L, {expense.cost}€, {expense.distance}KM</p>
        </div>
      ))}
    </div>
  )
}
