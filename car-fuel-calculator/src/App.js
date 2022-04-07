import React from 'react';
import { Header } from './components/Header';
import { TotalExpenses } from './components/TotalExpenses';
import { CarExpenses } from './components/CarExpenses';
import { RefuelHistory } from './components/RefuelHistory';
import { AddCar } from './components/AddCar';

import './App.css';

import { GlobalProvider } from './context/GlobalState';

function App()
{
  //   return (
  //     <GlobalProvider>
  //       <Header />
  //       <div className="container">
  //         <Balance />
  //         <IncomeExpenses />
  //         <TransactionList />
  //         <AddTransaction />
  //       </div>
  //     </GlobalProvider>
  //   );

  // Temporary (make a component for all of this?)
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
