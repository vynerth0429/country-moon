import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import { StoreProvider } from './contexts/store-context';
import { routes, RouteWithSubRoutes } from './routes/RouteConfig';

import HeaderView from './views/header/HeaderView';

function App() {
  return (
    <StoreProvider>
      <Router>
        <div className="h-screen flex flex-col bg-light dark:bg-dark">
          <HeaderView/>
          <Switch>
            {routes.map((route, i) => (
              <div key={i} className="h-full overflow-y-auto">
                <RouteWithSubRoutes{...route} />
              </div>
            ))}
          </Switch>
        </div>
      </Router>
    </StoreProvider>
  );
}

export default App;
