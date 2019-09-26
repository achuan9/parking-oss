import request from '../utils/request';

export const login = (req: { username: string; password: string; uservrifyCode: string }) =>
  request({
    url: '/relogin',
    method: 'POST',
    data: req,
  });

export const checkCode = (req: { checkKaptcha: string }) =>
  request({
    url: '/checkKaptcha',
    method: 'POST',
    data: req,
  });
