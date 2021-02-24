import {
  Route,
  RouteProps,
} from "react-router-dom";

import {
  HomePage,
  DetailPage,
} from "../pages";

export enum RouteEnum {
  HOME = '/',
  DETAIL = '/:code'
}

export const routes: RouteProps[] = [
  {
    path: RouteEnum.HOME,
    component: HomePage,
    exact: true,
  },
  {
    path: RouteEnum.DETAIL,
    component: DetailPage,
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