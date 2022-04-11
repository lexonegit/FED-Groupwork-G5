import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const AddRefuel = () => {
  const { addExpense } = useContext(GlobalContext);

  const [carName, setCarName] = useState('');
  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);

  const onSubmit = e => {
    e.preventDefault();

    const newExpense = {
      id: Math.floor(Math.random() * 100000000),
      carName,
      amount: +amount,
      cost: +price,
      distance: 0,
    };

    addExpense(newExpense);
  };

  return (
    <div>
      <h3>Add refuel information</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Car</label>
          <input type="text" value={carName} onChange={(e) => setCarName(e.target.value)}
          placeholder="Enter car name..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
              Amount of liters <br />
              </label>
          <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount..." />
        </div>
        <div className="form-control">
            <label htmlFor="price">
                Money spent <br />
            </label>
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}
            placeholder="Enter cost..." />
        </div>
        <button className="btn">Add car</button>
      </form>
    </div>
  )
}
