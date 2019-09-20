import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import Login from './pages/User/Login';
import Layout from './layout';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route path="/" component={Layout} />
    </Switch>
  </BrowserRouter>
);

export default App as any;
