import React from 'react';

import { Layout, Breadcrumb } from 'antd';
import { IBaseLayoutProps, IBaseLayoutState } from './index.interface';
import { BaseMenu } from './Menu';
import BaseHeader from './Header';
import { BaseRoute } from '../router';
import { ROUTES } from 'router/routes';
import './index.less';

const { Header, Sider, Content } = Layout;

class PageLayout extends React.PureComponent<IBaseLayoutProps, IBaseLayoutState> {
  static defaultProps = {};

  readonly state = {
    collapsed: false,
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className="logo" />
          <BaseMenu menu={ROUTES} {...this.props}></BaseMenu>
        </Sider>
        <Layout>
          <BaseHeader collapsed={this.state.collapsed}></BaseHeader>
          <Content
            style={{ padding: '0 20px', marginTop: 64 }}
          >
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              <BaseRoute />
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default PageLayout;
