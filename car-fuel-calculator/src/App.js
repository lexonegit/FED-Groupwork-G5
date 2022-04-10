import React from 'react';
import './LayoutStyles.css';

import { MainLayout } from './components/MainLayout';
import { GlobalProvider } from './context/GlobalState';

function App()
{
  return (
    <GlobalProvider>
      <MainLayout/>
    </GlobalProvider>
  );
}

export default App;
