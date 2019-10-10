import { RouteComponentProps } from 'react-router';
import { IRoute } from '../../router/index.interface';

export interface BaseSidebarProps extends RouteComponentProps {
  menu: IRoute[];
  collapsed: boolean;
}
