import React from 'react';
import { Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import Home from '../pages/home';
import UserManagement from '../pages/user-management';
import DeviceManagement from '../pages/device-management';
const { Header, Content } = Layout;

const BaseLayout: React.FC = () => {
  return (
    <Layout>
      <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px' }}
        >
          <Menu.Item key="1">
            <Link to="">首页</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="user-management">用户管理</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="device-management">设备管理</Link>
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px', marginTop: 64 }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
            <Route exact path="/" component={Home} />
            <Route path="/user-management" component={UserManagement} />
            <Route path="/device-management" component={DeviceManagement} />
        </div>
      </Content>
    </Layout>
  );
};

export default BaseLayout;
