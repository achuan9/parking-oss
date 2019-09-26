

# 路由

## 代码分割

```js
import React, { lazy, Suspense } from 'react';

const DeviceHotel = lazy(() => import('pages/Device/Hotel'));

export const BaseRoute: React.FC = () => (
  <Suspense fallback={<div>loading</div>}>
    <Switch>
      <Redirect from="/" to="/device/hotel" exact />
      <Route key="酒店商圈" path="/device/hotel" component={DeviceHotel} />
      <Route component={NotFound} />
    </Switch>
  </Suspense>
);
```

## React.FC 使用路由信息

```js
// https://www.pluralsight.com/guides/react-router-typescript
// 引入 RouteComponentProps

import { RouteComponentProps } from 'react-router-dom';

// 定义 params 类型
type TParams = {
  id?: string,
};

const BaseLayout: React.FC<RouteComponentProps<TParams>> = ({ match }) => {
  // ...
};
```

## 嵌套路由：

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
  return (
    <div>
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
    </div>
  );
};

export default BaseLayout;
```
