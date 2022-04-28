import React, { useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const TotalExpenses = () =>
{
  const { expenses } = useContext(GlobalContext);

  const totalSum = expenses.reduce((acc, expense) => acc + expense.cost, 0);
  const totalConsumption = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const totalDistance = expenses.reduce((acc, expense) => acc + expense.distance, 0);

  const avgExpensesPer100 = (totalSum / totalDistance * 100).toFixed(2);
  const avgConsumptionPer100 = (totalConsumption / totalDistance * 100).toFixed(2);

  return (
    <div>
      <h4>Total refueling expenses (all cars)</h4>
      <p>Total sum (euros): <b>{totalSum}</b></p>
      <p>Total consumption (liters): <b>{totalConsumption}</b></p>
      <p>Total distance (km): <b>{totalDistance}</b></p>
      <p>Avg. expenses per 100 km (euros): <b>{isNaN(avgExpensesPer100) ? 0 : avgExpensesPer100}</b></p>
      <p>Avg. consumption per 100 km (liters): <b>{isNaN(avgConsumptionPer100) ? 0 : avgConsumptionPer100}</b></p>
    </div>
  )
}
