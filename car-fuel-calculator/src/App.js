import React from 'react';
import './LayoutStyles.css';

import { MainLayout } from './components/MainLayout';
import { GlobalProvider } from './context/GlobalState';

function App()
{
  return (
    <div>
      <MainLayout/>
    </div>
  );
}

export default App;
