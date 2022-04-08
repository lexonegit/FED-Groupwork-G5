import React from 'react';
import { Header } from './components/Header';
import { TotalExpenses } from './components/TotalExpenses';
import { CarExpenses } from './components/CarExpenses';
import { RefuelHistory } from './components/RefuelHistory';
import { AddRefuel } from './components/AddRefuel';
import { SelectCar } from './components/SelectCar';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <TotalExpenses />
      <CarExpenses />
      <RefuelHistory />
      <AddRefuel />
      <SelectCar />
    </div>
  );
}

export default App;
