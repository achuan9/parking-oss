import React from 'react';
import { Layout } from 'antd';

import { BaseRoute } from '../router';
import { ROUTES } from '../router/routes';

import BaseSidebar from './Sidebar';
import BaseHeader from './Header';
import BaseBreadcrumb from './Breadcrumb';

import { IBaseLayoutProps, IBaseLayoutState } from './index.interface';

const { Content } = Layout;

class PageLayout extends React.PureComponent<IBaseLayoutProps, IBaseLayoutState> {
  state = {
    collapsed: false,
    username: 'ADMIN',
  };

  toggleSidebar = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <BaseSidebar menu={ROUTES} collapsed={this.state.collapsed} {...this.props}></BaseSidebar>
        <Layout>
          <BaseHeader
            collapsed={this.state.collapsed}
            toggleSidebar={this.toggleSidebar}
            username={this.state.username}
            history={this.props.history}
          ></BaseHeader>
          <Content style={{ padding: '0 20px', marginTop: 0 }}>
            <BaseBreadcrumb />
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
