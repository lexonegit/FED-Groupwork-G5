import React, { useContext, useState } from 'react';

import { Header } from './Header';
import { TotalExpenses } from './TotalExpenses';
import { CarExpenses } from './CarExpenses';
import { RefuelHistory } from './RefuelHistory';
import { AddRefuel } from './AddRefuel';
import { AddCar } from './AddCar';

import { GlobalContext } from '../context/GlobalState';

export const MainLayout = () =>
{
  const { cars, deleteExpense } = useContext(GlobalContext);
  const [selectedCar, setSelectedCar] = useState(cars[0].carName);

  const [view, setView] = useState(1);

  const handleCarSelection = e =>
  {
    setSelectedCar(e.target.value);

    handleView(e, 1);
  };

  // id 0 = Add car view
  // id 1 = Add refuel view
  const handleView = (e, id) =>
  {
    setView(id);
  }

  return (
    <div className="main-div">
      <div className="left-div">
        <div className="selection-div">
          <select name="cars" id="cars"
            value={selectedCar}
            onChange={handleCarSelection}
          >
            {cars.map(car => (
              <option key={"car" + car.id} value={car.carName}>{car.carName}</option>
            ))}
          </select>
          <button onClick={(e) => handleView(e, 0)}>Add a new car</button>
        </div>

        <div className="expenses-container">
          <div className="expenses-totals-div">
            <TotalExpenses />
          </div>

          <div className="expenses-car-div">
            <CarExpenses car={selectedCar} />
          </div>
        </div>

        <div className="content-div">
          {view === 1 ? <AddRefuel selectedCar={selectedCar} /> : <AddCar />}
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
