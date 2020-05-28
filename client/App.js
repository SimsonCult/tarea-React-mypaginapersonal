import React from 'react';
import {BrowserRouter as Routers, Route, Link, Switch} from 'react-router-dom';
import routes from './config/routes';

import './App.scss';

export default function App() {
  return (
    <Routers>
      <Switch>
        {routes.map((route, index) => (
          <RouteWithSubRoutes key={index} {...route} />
        ))}
      </Switch>
    </Routers>
  );
}

function RouteWithSubRoutes(route){
  return (
    <Route 
    path={route.path}
    exact={route.exact}
    render={props => <route.component routes={route.routes} {...props} />}
    />
  )
}