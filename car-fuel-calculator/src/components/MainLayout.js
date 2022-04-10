import React, { useContext } from 'react';

import { Header } from './Header';
import { TotalExpenses } from './TotalExpenses';
import { CarExpenses } from './CarExpenses';
import { RefuelHistory } from './RefuelHistory';
import { AddCar } from './AddCar';

import { GlobalContext } from '../context/GlobalState';

export const MainLayout = () =>
{
  const { cars } = useContext(GlobalContext)

  return (
    <div className="main-div">
      <div className="left-div">

        <div className="selection-div">
          <select name="cars" id="cars">
            {cars.map( car => (
              <option key={"car" + car.id}>{car.carName}</option>
            ))}
          </select>
          <button>New car</button>
        </div>

        <div className="expenses-container">
          <div className="expenses-totals-div">
            <TotalExpenses />
          </div>

          <div className="expenses-car-div">
            <CarExpenses />
          </div>
        </div>

        <div className="content-div">
          <div className="new-car-div">
            <AddCar />
          </div>
          <div className="new-expense-div">
            <p>new expense div</p>
          </div>
        </div>
      </div>

      <div className="right-div">
        <div className="history-div">
          <p>Refueling history</p>
          <RefuelHistory />
        </div>
      </div>
    </div>
  )
}