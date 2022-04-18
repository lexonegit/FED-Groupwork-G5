import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const AddRefuel = ({ selectedCar }) => {
  const { addExpense } = useContext(GlobalContext);

  const [amount, setAmount] = useState(0);
  const [price, setPrice] = useState(0);
  const [distance, setDistance] = useState(0);

  const onSubmit = e => {
    e.preventDefault();

    const newExpense = {
      id: Math.floor(Math.random() * 100000000),
      carName: selectedCar,
      amount: +amount,
      cost: +price,
      distance: +distance,
    };

    addExpense(newExpense);
  };

  return (
    <div>
      <h3>Add refuel information</h3>
      <form onSubmit={onSubmit}>
        <p>Car Selected: <b>{selectedCar}</b></p>
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
        <div className="form-control">
            <label htmlFor="distance">
                Distance traveled <br />
            </label>
            <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)}
            placeholder="Enter distance..." />
        </div>
        <button className="btn">Add Refuel Expense</button>
      </form>
    </div>
  )
}
