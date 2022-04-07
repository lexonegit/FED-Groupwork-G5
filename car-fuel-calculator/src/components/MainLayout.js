import React from 'react'

import { TestComponent } from './TestComponent';

export const MainLayout = () =>
{
  return (
    <div className="main-div">
      <div className="left-div">

        <div className="selection-div">
          <select name="cars" id="cars">
            <option>Auto 1</option>
            <option>Auto 2</option>
            <option>Auto 3</option>
          </select>
          <button>New car</button>
        </div>

        <div className="expenses-container">
          <div className="expenses-totals-div">
            <p>TOTAL REFUELING EXPENSES</p>
            <p>Total sum</p>
            <p>Total consumption</p>
            <p>Total distance</p>
            <p>Avg expenses</p>
            <p>Avg consumption</p>
          </div>

          <div className="expenses-car-div">
            <p>CAR REFUELING EXPENSES</p>
            <p>Total sum</p>
            <p>Total consumption</p>
            <p>Total distance</p>
            <p>Avg expenses</p>
            <p>Avg consumption</p>
          </div>
        </div>

        <div className="content-div">
          <div className="new-car-div">
            <p>new car div</p>
          </div>
          <div className="new-expense-div">
            <p>new expense div</p>
          </div>
        </div>
      </div>

      <div className="right-div">
        <div className="history-div">
          <p>Refueling history</p>
          <TestComponent />
        </div>
      </div>
    </div>
  )
}
