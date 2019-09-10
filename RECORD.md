嵌套路由正确示例：

```js
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
```

```js

import React from 'react';
import { Route, Link } from 'react-router-dom';
import Home from '../pages/home';
import Bus from '../pages/bus';
import Cart from '../pages/cart';

const BaseLayout: React.FC = () => {
  return (<div>
      <ul>
        <li>
          <Link to="">Bus</Link>
        </li>
        <li>
          // Link to 属性不需要用绝对路径
          <Link to="bus">Bus</Link>
        </li>
        <li>
          <Link to="cart">Cart</Link>
        </li>
      </ul>
      // Route path 属性 _必须_ 要绝对路径
      <Route exact path="/" component={Home} />
      <Route path="/bus" component={Bus} />
      <Route path="/cart" component={Cart} />
    </div>)
};

export default BaseLayout;

```