import React from 'react';
import { IBaseSidebarProps } from '../index.interface';
import { Layout, Menu, Icon } from 'antd';
import { IRoute } from '../../router/index.interface';
import { Link } from 'react-router-dom';
import style from './index.module.scss';
const { SubMenu, Item } = Menu;
const { Sider } = Layout;

interface IMenuItem {
  path: string;
  title: string;
  icon?: string;
}

const menuItem = ({ path, title, icon }: IMenuItem) => (
  <Item key={path}>
    <Link to={path}>
      {icon && <Icon type={icon} />}
      <span>{title}</span>
    </Link>
  </Item>
);

export class BaseSidebar extends React.PureComponent<IBaseSidebarProps> {
  readonly state = {
    collapsed: false,
  };

  render() {
    const selectKey = this.props.location.pathname;
    const openKey = selectKey.split('/')[1];
    return (
      <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
        <div className={style.logo} />
        <Menu
          mode="inline"
          theme="dark"
          defaultSelectedKeys={[selectKey]}
          defaultOpenKeys={[`/${openKey}`]}
        >
          {this.props.menu.map(({ path, children, icon, title }: IRoute) =>
            children ? (
              <SubMenu
                key={path}
                title={
                  <span>
                    <Icon type={icon} />
                    <span>{title}</span>
                  </span>
                }
              >
                {children.map(child => menuItem(child))}
              </SubMenu>
            ) : (
              menuItem({ path, title, icon })
            ),
          )}
        </Menu>
      </Sider>
    );
  }
}

export default BaseSidebar;
