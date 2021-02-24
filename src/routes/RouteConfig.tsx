import {
  Route,
  RouteProps,
} from "react-router-dom";

import {
  HomePage
} from "../pages";

export enum RouteEnum {
  HOME = '',
}

export const routes: RouteProps[] = [
  {
    path: RouteEnum.HOME,
    component: HomePage,
    exact: true,
  },
];

export const RouteWithSubRoutes = (route: any) => {
  return (
    <Route
      exact={route.exact}
      path={route.path}
      render={props => (
        <route.component {...props} routes={route.routes} />
      )}
    />
  );
}