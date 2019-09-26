import { RouteComponentProps } from 'react-router';
import { IRoute } from '../router/index.interface';

export interface IBaseLayoutProps extends RouteComponentProps {
  userInfo?: {
    getInfo?: string;
  };
}

export interface IBaseLayoutState {
  collapsed: boolean;
}

export interface IBaseSidebarProps extends RouteComponentProps {
  menu: IRoute[];
}
