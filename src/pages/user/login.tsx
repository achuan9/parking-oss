import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { ILoginFormProps, ILoginState } from './index.interface';
import { login } from '../../api/login';

class NormalLoginForm extends React.PureComponent<ILoginFormProps, ILoginState> {
  constructor(props: ILoginFormProps) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  loginHandler = async () => {
    console.log('-----');

    login({ username: 'admin', password: 'sd', uservrifyCode: '12343' });
  };
  render() {
    return (
      <Form className="login-form" style={{ width: '300px', margin: '30px auto' }}>
        <Form.Item>
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item>
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Checkbox>Remember me</Checkbox>
          <a className="login-form-forgot" href="www.baidu.com">
            Forgot password
          </a>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={this.loginHandler}
          >
            Log in
          </Button>
          Or <a href="www.baidu.com">register now!</a>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);
export default WrappedNormalLoginForm;
