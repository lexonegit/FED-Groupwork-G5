import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const RefuelHistory = () =>
{
  const { expenses } = useContext(GlobalContext);

  return (
    <div>
      {expenses.map(expense => (
        <div className="history-element-div">
          <p key={expense.id}><b>{expense.carName}</b></p>
          <p key={expense.id}>{expense.amount}L, {expense.cost}€</p>
        </div>
      ))}
    </div>
  )
}
