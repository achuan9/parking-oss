
## 项目介绍

重构停车场运营支撑系统

## 相关技术栈
[Create React App](https://github.com/facebook/create-react-app)  
[React](https://github.com/facebook/create)  
[React-Router](https://reacttraining.com/react-router/)  
[Redux](https://redux.js.org/introduction/getting-started)  
[Ant Design of React](https://ant.design/docs/react/introduce-cn)  
[TypeScript](https://www.typescriptlang.org/)  
[Less](http://lesscss.cn/)  
[GraphQL](https://graphql.org/)  


## 命令
在项目根目录运行：

### `npm start`

启动开发环境

### `npm test`

启动测试环境

### `npm run build`

构建生产版本

### `npm run eject`

此命令已被移除，请通过 [react-app-rewired](https://github.com/timarney/react-app-rewired) 修改配置

# 可能遇到的问题

```bash
The react-scripts package provided by Create React App requires a dependency:

  "babel-eslint": "10.0.2"

  ....

```

1. 移除 package-lock.json 或者 yarn.lock
2. 移除 node_modules
3. 移除 package.json 里边的 eslint-plugin-react-app 依赖项
4. 重新安装依赖
5. 再添加依赖 eslint-plugin-react-app