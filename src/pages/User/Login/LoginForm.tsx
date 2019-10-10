import React from 'react';
import { Form, Icon, Input, Button, Checkbox, Row, Col } from 'antd';
import { LoginFormProps, LoginState } from './index.interface';
import { login } from '../../../api/login';

class LoginForm extends React.PureComponent<LoginFormProps, LoginState> {
  state = {
    loading: false,
    timestamp: Date.now(),
  };

  loginHandler = (e: React.FormEvent) => {
    e.preventDefault();
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        console.log('values', values);

        this.setState({
          loading: true,
        });
        const { remember } = values;
        delete values.remember;
        const res = await login({ ...values });
        this.setState({
          loading: false,
        });

        window.localStorage.setItem('remember', remember);
        if (res.result) {
          const path = this.props.location.state.from.pathname;
          this.props.history.push(path || '/dashboard');
        }
      }
    });
  };
  clickCode = () => {
    this.setState({ timestamp: Date.now() });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    const storageSession = window.localStorage.getItem('remember');

    return (
      <Form onSubmit={this.loginHandler} style={{ width: '300px', margin: '30px auto' }}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: '请输入用户名' }],
          })(
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="用户名/手机号"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="密码"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Row gutter={8}>
            <Col span={16}>
              {getFieldDecorator('uservrifyCode', {
                rules: [{ required: true, message: '请输入验证码' }],
              })(
                <Input
                  prefix={<Icon type="check-circle" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  maxLength={4}
                  placeholder="验证码"
                />,
              )}
            </Col>
            <Col span={8}>
              <Button
                type="dashed"
                onClick={this.clickCode}
                ghost
                style={{ paddingLeft: '1px', paddingRight: '1px' }}
              >
                <img
                  src={`http://gy.parking.vpclub.cn/webapi/getKaptcha?d=${this.state.timestamp}`}
                  height="100%"
                  alt="验证码"
                />
              </Button>
            </Col>
          </Row>
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: storageSession !== null ? storageSession : true,
          })(<Checkbox>记住密码</Checkbox>)}
          <Button type="primary" htmlType="submit" block loading={this.state.loading}>
            登录
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create({ name: 'normal_login' })(LoginForm);
// const WrappedLoginForm = Form.create<LoginFormProps>({ name: 'normal_login' })(LoginForm);
export default WrappedLoginForm;
