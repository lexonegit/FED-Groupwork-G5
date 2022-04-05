import React from 'react';
import { Header } from './components/Header';
import { TotalExpenses } from './components/TotalExpenses';
import { CarExpenses } from './components/CarExpenses';
import { RefuelHistory } from './components/RefuelHistory';
import { AddCar } from './components/AddCar';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <TotalExpenses />
      <CarExpenses />
      <RefuelHistory />
      <AddCar />
    </div>
  );
}

export default App;
