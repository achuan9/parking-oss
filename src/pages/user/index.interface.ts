import { FormComponentProps } from 'antd/lib/form';
import { RouteComponentProps } from 'react-router';

export interface IVariables {
  username: string;
  password: string;
}

export interface ILoginState {
  loading: boolean;
}

export interface IResponse {
  login: {
    lifeTime: number;
    token: string;
  };
}

export interface ILoginFormProps extends FormComponentProps, RouteComponentProps, IVariables {}
