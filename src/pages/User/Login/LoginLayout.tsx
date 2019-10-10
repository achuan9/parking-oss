import React from 'react';
import { Carousel, Card } from 'antd';
import style from './index.module.scss';
import logo from './images/logo.png';
import banner1 from './images/banner1.jpg';
import banner2 from './images/banner2.jpg';
import banner3 from './images/banner3.jpg';

const Header = () => (
  <header className={style.header}>
    <img src={logo} alt="logo" className={style.logo} />
  </header>
);
const Footer = () => <footer className={style.footer}>Copyright © 贵阳城投集团版权所有</footer>;

class LoginLayout extends React.PureComponent {
  render() {
    return (
      <div>
        <Header></Header>
        <main className={style.main}>
          <Carousel autoplay dots={false} effect="fade">
            <img src={banner1} alt="背景图" />
            <img src={banner2} alt="背景图" />
            <img src={banner3} alt="背景图" />
          </Carousel>

          <Card className={style.form}>{this.props.children}</Card>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default LoginLayout;
