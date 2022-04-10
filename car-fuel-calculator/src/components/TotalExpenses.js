import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const TotalExpenses = () => {
  const { expenses } = useContext(GlobalContext);

  const totalSum = expenses.reduce((acc, expense) => acc + expense.cost, 0);
  const totalConsumption = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const totalDistance = expenses.reduce((acc, expense) => acc + expense.distance, 0);

  const avgExpensesPer100 = totalSum / totalDistance * 100;
  const avgConsumptionPer100 = totalConsumption / totalDistance * 100;

  return (
    <div>
      <h4>Total refueling expenses (all cars)</h4>
      <p>Total sum (euros): {totalSum}</p>
      <p>Total consumption (liters): {totalConsumption}</p>
      <p>Total distance (km): {totalDistance} </p>
      <p>Avg. expenses per 100 km (euros): {avgExpensesPer100}</p>
      <p>Avg. consumption per 100 km (liters): {avgConsumptionPer100}</p>
    </div>
  )
}
