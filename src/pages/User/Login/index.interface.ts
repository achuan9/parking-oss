import { FormComponentProps } from 'antd/lib/form';
import { RouteComponentProps } from 'react-router';

export interface Variables {
  username: string;
  password: string;
}

export interface LoginState {
  loading: boolean;
  timestamp: number;
}

export interface Response {
  login: {
    lifeTime: number;
    token: string;
  };
}

export interface LoginFormProps extends FormComponentProps, RouteComponentProps, Variables {}
