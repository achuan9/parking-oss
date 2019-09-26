import React, { useState } from 'react';
import { Menu, Layout, Dropdown, Icon, Avatar, Badge } from 'antd';
import style from './index.module.scss';
const { Header } = Layout;

interface BaseHeaderProps {
  collapsed: boolean;
  username: string;
}

const BaseHeader: React.FC<BaseHeaderProps> = props => {
  const { collapsed, username = 'ADMIN' } = props;
  const badgeNum = 100;
  const [isFullscreen] = useState(false);

  const BadgeMenu = (
    <Menu>
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
    <Menu>
      <Menu.Item>
        <Icon type="edit" />
        修改密码
      </Menu.Item>
      <Menu.Item>
        <Icon type={isFullscreen ? 'fullscreen-exit' : 'fullscreen'} />
        全屏
      </Menu.Item>
      <Menu.Item>
        <Icon type="logout" />
        注销
      </Menu.Item>
    </Menu>
  );

  return (
    <Header className={style.header}>
      <Icon className="trigger" type={collapsed ? 'menu-unfold' : 'menu-fold'} />
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
