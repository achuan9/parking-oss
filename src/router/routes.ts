import { lazy } from 'react';
import { IRoute } from "./index.interface";

import Dashboard from '../pages/Dashboard';

// // 设备管理
const DeviceHotel = lazy(() => import('../pages/Device/Hotel'))
const DevicePark = lazy(() => import('../pages/Device/Park'))
const DeviceRecharge = lazy(() => import('../pages/Device/Recharge'))

// // 账户管理
const AccountHotel = lazy(() => import('../pages/Account/Hotel'))
const AccountDriver = lazy(() => import('../pages/Account/Driver'))
const AccountCompany = lazy(() => import('../pages/Account/Company'))

export const ROUTES: IRoute[] = [
  {
    title: '首页',
    path: '/dashboard',
    icon: 'home',
    component: Dashboard,
  },
  {
    path: '/device',
    title: '设备管理',
    icon: 'appstore',
    children: [
      {
        path: '/device/hotel',
        title: '酒店商圈',
        component: DeviceHotel,
      },
      {
        path: '/device/park',
        title: '停车场',
        component: DevicePark,
      },
      {
        path: '/device/recharge',
        title: '充电站',
        component: DeviceRecharge,
      },
    ],
  },
  {
    path: '/account',
    title: '用户管理',
    icon: 'appstore',
    children: [
      {
        path: '/account/hotel',
        title: '酒店商圈',
        component: AccountHotel,
      },
      {
        path: '/account/driver',
        title: '个人司机',
        component: AccountDriver,
      },
      {
        path: '/account/company',
        title: '企业',
        component: AccountCompany,
      },
    ],
  },
  {
    path: '/vehicle',
    title: '车辆管理',
    icon: 'appstore',
    children: [
      {
        path: '/vehicle/month',
        title: '月卡车',
        component: lazy(() => import('../pages/Vehicle/Month')),
      },
      {
        path: '/vehicle/VIP',
        title: 'VIP车',
        component: lazy(() => import('../pages/Vehicle/VIP')),
      },
      {
        path: '/vehicle/Free',
        title: '免费车',
        component: lazy(() => import('../pages/Vehicle/Free')),
      }
    ],
  },
  {
    path: '/card',
    title: '发卡管理',
    icon: 'appstore',
    children: [
      {
        path: '/Card/mend',
        title: '补卡',
        component: lazy(() => import('../pages/Card/Mend')),
      },
      {
        path: '/Card/publishPerson',
        title: '个人发卡',
        component: lazy(() => import('../pages/Card/PublishPerson')),
      },
      {
        path: '/Card/PublishCompany',
        title: '企业发卡',
        component: lazy(() => import('../pages/Card/PublishCompany')),
      },
      
      {
        path: '/Card/liftedLose',
        title: '解除挂失',
        component: lazy(() => import('../pages/Card/LiftedLose')),
      },
      {

        path: '/Card/Recycle',
        title: '卡片回收',
        component: lazy(() => import('../pages/Card/Recycle')),
      },
      {
        path: '/Card/Search',
        title: '发卡用户查询',
        component: lazy(() => import('../pages/Card/Search')),
      },
      {
        path: '/Card/Plugin',
        title: '发卡插件下载',
        component: lazy(() => import('../pages/Card/Plugin')),
      }
      
    ],
  },
];
