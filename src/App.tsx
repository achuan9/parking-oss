import React, { ErrorInfo } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import 'antd/dist/antd.css';
import './App.css';
import Login from './pages/User/Login';
import Layout from './layout';
import { notification } from 'antd';

export default class App extends React.PureComponent {
  componentDidCatch(error: Error, info: ErrorInfo) {
    notification.error({
      message: '系统错误',
      description: info.componentStack,
      duration: 5,
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" component={Layout} />
        </Switch>
      </BrowserRouter>
    );
  }
}
