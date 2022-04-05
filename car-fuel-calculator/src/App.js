import React from 'react';
import { Header } from './components/Header';
import { TotalExpenses } from './components/TotalExpenses';
import { CarExpenses } from './components/CarExpenses';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <TotalExpenses />
      <CarExpenses />
    </div>
  );
}

export default App;
