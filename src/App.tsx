import React from 'react';
import './App.scss';
import { StoreProvider } from './contexts/store-context';

import HeaderView from './views/header/HeaderView';

function App() {
  return (
    <StoreProvider>
      <div className="h-screen bg-light dark:bg-dark">
        <HeaderView />
      </div>
    </StoreProvider>
  );
}

export default App;
