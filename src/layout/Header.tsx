import React from 'react';
import { Layout, Icon } from 'antd';
const { Header } = Layout;

class BaseHeader extends React.PureComponent<{collapsed: boolean}, {}> {
  render() {
    return (
      <Header
        style={{
          position: 'fixed',
          zIndex: 1,
          width: '100%',
          paddingLeft: 20,
          backgroundColor: '#fff',
        }}
      >
        <Icon className="trigger" type={this.props.collapsed ? 'menu-unfold' : 'menu-fold'} />
      </Header>
    );
  }
}

export default BaseHeader