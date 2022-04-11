import React, { useContext, useState } from 'react';

import { Header } from './Header';
import { TotalExpenses } from './TotalExpenses';
import { CarExpenses } from './CarExpenses';
import { RefuelHistory } from './RefuelHistory';
import { AddRefuel } from './AddRefuel';

import { GlobalContext } from '../context/GlobalState';

export const MainLayout = () =>
{
  const { cars, addCar, deleteExpense } = useContext(GlobalContext);
  const [ selectedCar, setSelectedCar ] = useState(cars[0].carName);

  const handleCarSelection = e => {
    setSelectedCar(e.target.value);
  };

  // just something I wanted to play around with for a bit,
  // not anything necessary for the final product
  // returns false if name is invalid (empty)
  const validateName = carName => {
    if (!carName) return false;

    return true;
  };

  const handleNewCar = e => {
    const carName = prompt("Please enter car's name:").trim();
    // if function returns false, cancel and inform the user
    if (!validateName( carName )) {
      alert("Bad name");
      return;
    }

    addCar({
      id: Math.floor(Math.random() * 100000000),
      carName,
    });

    setSelectedCar(carName);
  };

  return (
    <div className="main-div">
      <div className="left-div">

        <div className="selection-div">
          <select name="cars" id="cars"
            value={selectedCar}
            onChange={handleCarSelection}
            >
            {cars.map( car => (
              <option key={"car" + car.id} value={car.carName}>{car.carName}</option>
            ))}
          </select>
          <button onClick={handleNewCar}>New car</button>
        </div>

        <div className="expenses-container">
          <div className="expenses-totals-div">
            <TotalExpenses />
          </div>

          <div className="expenses-car-div">
            <CarExpenses car={selectedCar}/>
          </div>
        </div>

        <div className="content-div">
          <div className="new-car-div">
            <p>new car div</p>
          </div>
          <div className="new-expense-div">
            <AddRefuel />
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
