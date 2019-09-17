import request from '@/utils/request';
export default {
  login: (req: { username: string; password: string; uservrifyCode: string }) =>
    request({
      url: '/relogin',
      method: 'POST',
      data: req,
    }),

  checkCode: (req: { checkKaptcha: string }) =>
    request({
      url: '/checkKaptcha',
      method: 'POST',
      data: req,
    }),
};
