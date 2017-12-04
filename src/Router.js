import React from 'react';
import { Route, Switch } from 'react-router-dom';

import MainLayout from './shared/components/Layout';
import NotFoundScreen from './shared/components/NotFoundScreen';

const RouterComponent = () => (
  <Switch>
    <Route path="/" component={MainLayout} />
    <Route path="/" component={NotFoundScreen} />
  </Switch>
);

export default RouterComponent;
