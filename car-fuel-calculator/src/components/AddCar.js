import React, { useState, useContext } from 'react';

import { GlobalContext } from '../context/GlobalState';

export const AddCar = () =>
{
  const { cars, addCar } = useContext(GlobalContext);

  const [carName, setName] = useState("");
  const [setSelectedCar] = useState(cars[0].carName);

  // just something I wanted to play around with for a bit,
  // not anything necessary for the final product
  // returns false if name is invalid (empty)
  const validateName = carName =>
  {
    if (!carName) return false;

    return true;
  };

  const onSubmit = e =>
  {
    e.preventDefault();

     // if function returns false, cancel and inform the user
     if (!validateName(carName))
     {
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
    <div>
      <h3>Add a new car</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="amount">
            Car name<br />
          </label>
          <input type="text" value={carName} onChange={(e) => setName(e.target.value)}
            placeholder="Enter car name..." />
        </div>
        <button className="btn">Add car</button>
      </form>
    </div>
  )
}
