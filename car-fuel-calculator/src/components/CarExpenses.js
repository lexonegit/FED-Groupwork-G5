import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const CarExpenses = ({ car }) =>
{
  const { expenses } = useContext(GlobalContext);

  const carExpenses = expenses.filter(expense => expense.carName === car);

  const totalSum = carExpenses.reduce((acc, expense) => acc + expense.cost, 0);
  const totalDistance = carExpenses.reduce((acc, expense) => acc + expense.distance, 0);
  const totalConsumption = carExpenses.reduce((acc, expense) => acc + expense.amount, 0);

  const avgExpensesPer100 = (totalSum / totalDistance * 100).toFixed(2);
  const avgConsumptionPer100 = (totalConsumption / totalDistance * 100).toFixed(2);

  return (
    <div>
      <h4>Car refueling expenses</h4>
      <h4>{car}</h4>
      <p>Total sum (euros): {totalSum}</p>
      <p>Total consumption (liters): {totalConsumption}</p>
      <p>Total distance (km): {totalDistance}</p>
      <p>Avg. expenses per 100 km (euros): {isNaN(avgExpensesPer100) ? 0 : avgExpensesPer100}</p>
      <p>Avg. consumption per 100 km (liters): {isNaN(avgConsumptionPer100) ? 0 : avgConsumptionPer100}</p>
    </div>
  )
}
