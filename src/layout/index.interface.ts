import { RouteComponentProps } from 'react-router';
export interface IBaseLayoutProps extends RouteComponentProps {
  userInfo?: {
    getInfo?: string;
  };
}

export interface IBaseLayoutState {
  collapsed: boolean;
}
