import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const RefuelHistory = () =>
{
  const { expenses } = useContext(GlobalContext);

  return (
    <div className="history-element-div">
      {expenses.map( expense => (
        <p key={expense.id}>{expense.carName} -- {expense.cost}€ -- {expense.amount}L</p>
      ))}
    </div>
  )
}
