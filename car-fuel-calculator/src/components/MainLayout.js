import React, { useContext, useState } from 'react';

// import { Header } from './Header';
import { TotalExpenses } from './TotalExpenses';
import { CarExpenses } from './CarExpenses';
import { RefuelHistory } from './RefuelHistory';
import { AddRefuel } from './AddRefuel';
import { AddCar } from './AddCar';

import { GlobalContext } from '../context/GlobalState';

export const MainLayout = () =>
{
  const { cars } = useContext(GlobalContext);
  const [selectedCar, setSelectedCar] = useState(cars[0]?.carName);

  const [view, setView] = useState( selectedCar ? 1 : 0);

  const handleCarSelection = carName =>
  {
    setSelectedCar(carName);

    handleView(1);
  };

  // id 0 = Add car view
  // id 1 = Add refuel view
  const handleView = id =>
  {
    setView(id);
  }

  return (
    <div className="main-div">
      <div className="left-div">
        <div className="selection-div">
          <select name="cars" id="cars"
            value={selectedCar}
            onChange={e => handleCarSelection(e.target.value) }
          >
            {cars.map(car => (
              <option key={"car" + car.id} value={car.carName}>{car.carName}</option>
            ))}
          </select>
          <button onClick={(e) => handleView(0)}>Add a new car</button>
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
          {view === 1 ? <AddRefuel selectedCar={selectedCar} /> : <AddCar handleCarSelection={handleCarSelection}/>}
        </div>
      </div>

      <div className="right-div">
        <div className="history-div">
          <RefuelHistory />
        </div>
      </div>
    </div>
  )
}
