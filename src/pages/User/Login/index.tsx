import React from 'react';
import LoginLayout from './LoginLayout';
import WrappedLoginForm from './LoginForm';
class Login extends React.PureComponent {
  render() {
    return (
      <LoginLayout>
        <WrappedLoginForm {...this.props}></WrappedLoginForm>
      </LoginLayout>
    );
  }
}
export default Login;
