import React from 'react';
import { IBaseMenuProps } from './index.interface';
import { Menu, Icon } from 'antd';
import { IRoute } from '../router/index.interface';
import { Link } from 'react-router-dom';

const { SubMenu, Item } = Menu;

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

export class BaseMenu extends React.PureComponent<IBaseMenuProps> {
  
  
  render() {
    const selectKey = this.props.location.pathname;
    const openKey = selectKey.split('/')[1]
    
    return (
      <Menu mode="inline" theme="dark" defaultSelectedKeys={[selectKey]}
      defaultOpenKeys={[`/${openKey}`]}>
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
    );
  }
}

export default BaseMenu;
