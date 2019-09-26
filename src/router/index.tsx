import React, { Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ROUTES } from './routes';
import NotFound from '../pages/not-found';
import { PageLoading } from '../components/PageLoading';
import { IRoute } from "./index.interface";

const getRoute = (route: IRoute) => {
  const { title, path, component: Component } = route;
  return <Route key={title} path={path} component={Component} />;
};

export const BaseRoute: React.FC = () => (
  <Suspense fallback={<PageLoading />}>
    <Switch>
      <Redirect from="/" to={ROUTES[0].path} exact />
      {ROUTES.map(route => {
        if (route.component) {
          return getRoute(route);
        } else {
          return route.children && route.children.map(child => getRoute(child));
        }
      })}
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);
