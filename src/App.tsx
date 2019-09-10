import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.less';
import NotFound from './pages/not-found';
import Login from './pages/user/login';
import BaseLayout from './layouts/BaseLayout';

const App: React.FC = () => (
  <Router>
    <Switch>
      <Route path="/" component={BaseLayout} />
      <Route path="/login" component={Login} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App as any;
