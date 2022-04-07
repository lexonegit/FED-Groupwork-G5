import React from 'react'

export const AddCar = () => {
  return (
    <div>
      <h3>Add a new car</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Car</label>
          <input type="text" placeholder="Enter car name..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
              Amount of liters <br />
              </label>
          <input type="number" placeholder="Enter amount..." />
        </div>
        <div className="form-control">
            <label htmlFor="price">
                Money spent <br />
            </label>
            <input type="number" placeholder="Enter cost..." />
        </div>
        <button className="btn">Add car</button>
      </form>
    </div>
  )
}
