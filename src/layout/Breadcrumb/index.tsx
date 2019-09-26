import React from 'react';
import { withRouter } from 'react-router-dom';
import { Breadcrumb } from 'antd';
import { ROUTES } from '../../router/routes';
import { IRoute } from '../../router/index.interface';
import styles from './index.module.scss';

/**
 *
 * 通过当前路径所，在路由数组中的找到对应的路由对象
 *
 * @param {IRoute[]} routes 路由数组
 * @param {string} pathname 当前路由路径
 * @return {IRoute[]} 匹配的路由对象
 */

const getMatchRoutePath = (routes: IRoute[], pathname: string): IRoute[] => {
  const result: IRoute[] = [];
  let r: IRoute[] = routes;
  const pathArr: string[] = pathname.split('/').filter(i => i);
  const paths: string[] = pathArr.map((_, index) => `/${pathArr.slice(0, index + 1).join('/')}`);

  for (const path of paths) {
    const match: IRoute | undefined = r.find(item => item.path === path);
    if (match) {
      result.push(match);
      if (match.children) {
        r = match.children;
      }
    }
  }
  return result;
};

const BaseBreadcrumb = withRouter(props => {
  const { location } = props;
  const pathArr = getMatchRoutePath(ROUTES, location.pathname);
  const breadcrumbItems = pathArr.map(item => (
    <Breadcrumb.Item key={item.path}>{item.title}</Breadcrumb.Item>
  ));
  return (
    <Breadcrumb separator=">" className={styles['ant-breadcrumb']}>
      {breadcrumbItems}
    </Breadcrumb>
  );
});

export default BaseBreadcrumb;
