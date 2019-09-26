import React from 'react';
import { Layout } from 'antd';

import { BaseRoute } from '../router';
import { ROUTES } from '../router/routes';

import { BaseSidebar } from './Sidebar';
import BaseHeader from './Header';
import BaseBreadcrumb from './Breadcrumb';

import { IBaseLayoutProps, IBaseLayoutState } from './index.interface';

const { Content } = Layout;

class PageLayout extends React.PureComponent<IBaseLayoutProps, IBaseLayoutState> {
  static defaultProps = {};

  readonly state = {
    collapsed: false,
    username: 'ADMIN',
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <BaseSidebar menu={ROUTES} {...this.props}></BaseSidebar>
        <Layout>
          <BaseHeader collapsed={this.state.collapsed} username={this.state.username}></BaseHeader>
          <Content style={{ padding: '0 20px', marginTop: 64 }}>
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
