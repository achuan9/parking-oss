/// <reference path="screenfull.d.ts" />
import React, { useState } from 'react';
import screenfull from 'screenfull';
import { Menu, Layout, Dropdown, Icon, Avatar, Badge } from 'antd';
import style from './index.module.scss';
import { ClickParam } from 'antd/lib/menu';
import H from 'history';

const { Header } = Layout;

interface BaseHeaderProps {
  collapsed: boolean;
  username: string;
  toggleSidebar: () => void;
  history: H.History;
}

const BaseHeader: React.FC<BaseHeaderProps> = props => {
  const { collapsed, username = 'ADMIN' } = props;
  const [isScreenFull, setIsScreenFull] = useState(!!window.sessionStorage.getItem('screenfull'));
  const badgeNum = 100;
  const screen = [
    {
      text: '全屏',
      icon: 'fullscreen',
    },
    {
      text: '退出全屏',
      icon: 'fullscreen-exit',
    },
  ];
  const avatarMenuHandler = ({ key }: ClickParam) => {
    if (key === 'edit') {
      props.history.push('/user/password');
    }
    if (key === 'fullscreen') {
      if (screenfull.isEnabled) {
        screenfull.toggle();
        setIsScreenFull(!isScreenFull);
        window.sessionStorage.setItem('screenfull', `${!isScreenFull}`);
      }
    }
    if (key === 'logout') {
      // console.log(props);
      const curPath = props.history.location.pathname;
      props.history.push('/login', {
        from: curPath,
      });
    }
  };
  const badgeMenuHandler = () => {
    enum Paths {
      edit = '/user/password',
    }
  };

  const BadgeMenu = (
    <Menu onClick={badgeMenuHandler}>
      <Menu.Item disabled>
        共有
        <Badge count={badgeNum} />
        条警告
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <Icon type="close-circle" />
        严重告警
      </Menu.Item>
      <Menu.Item>
        <Icon type="warning" />
        重要告警
      </Menu.Item>
      <Menu.Item>
        <Icon type="exclamation-circle" />
        次要告警
      </Menu.Item>
      <Menu.Item>
        <Icon type="info-circle" />
        警告告警
      </Menu.Item>
      <Menu.Item>
        <Icon type="question-circle" />
        系统告警
      </Menu.Item>
    </Menu>
  );

  const AvatarMenu = (
    <Menu onClick={avatarMenuHandler}>
      <Menu.Item key="edit">
        <Icon type="edit" />
        修改密码
      </Menu.Item>
      <Menu.Item key="fullscreen">
        <Icon type={screen[Number(isScreenFull)]['icon']} />
        {screen[Number(isScreenFull)]['text']}
      </Menu.Item>
      <Menu.Item key="logout">
        <Icon type="logout" />
        注销
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={style.header}>
      <Icon
        className="trigger"
        type={collapsed ? 'menu-unfold' : 'menu-fold'}
        onClick={props.toggleSidebar}
      />
      <div className={style['header-right']}>
        <Dropdown overlay={BadgeMenu} placement="bottomRight" key="badge-menu">
          <span className={style['header-right-avatar-wrapper']}>
            <Badge dot>
              <Icon type="notification" />
            </Badge>
          </span>
        </Dropdown>
        <Dropdown overlay={AvatarMenu} placement="bottomLeft" key="avatar-menu">
          <span className={style['header-right-avatar-wrapper']}>
            <Avatar className={style['header-right-avatar']}>{username}</Avatar>
            <span>{username}</span>
            <Icon type="down" />
          </span>
        </Dropdown>
      </div>
    </Header>
  );
};

export default BaseHeader;
