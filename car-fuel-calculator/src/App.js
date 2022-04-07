// import './App.css';
import './LeeviCss.css';
import { MainLayout } from './components/MainLayout';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';

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
    <MainLayout />
  );
}

export default App;
