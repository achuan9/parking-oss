import axios, { Method, AxiosResponse, AxiosRequestConfig } from 'axios';

export interface RequestParams {
  method: Method,
  url: string,
  data?: object | string;
  headers?: object
}

export class HttpRequest {
  public queue: any; // 请求的url集合
  public constructor() {
    this.queue = {};
  }
  destroy(url: string) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      // hide loading
    }
  }
  interceptors(instance: any, url?: string) {
    // 请求拦截
    instance.interceptors.request.use(
      (config: AxiosRequestConfig) => {
        // 添加全局的loading...
        if (!Object.keys(this.queue).length) {
          // show loading
        }
        if (url) {
          this.queue[url] = true;
        }
        return config;
      },
      (error: any) => {
        console.error(error);
      },
    );
    // 响应拦截
    instance.interceptors.response.use(
      (res: AxiosResponse) => {
        if (url) {
          this.destroy(url);
        }
        const { data, status } = res;
        if (status === 200 && data.result) {
          return data;
        }
        return requestFail(res); // 失败回调
      },
      (error: any) => {
        if (url) {
          this.destroy(url);
        }
        console.error(error);
      },
    );
  }
  async request(options: AxiosRequestConfig) {
    const instance = axios.create();
    await this.interceptors(instance, options.url);
    return instance(options);
  }
}

// 请求失败
const requestFail = (res: AxiosResponse) => {
  let errStr = '网络繁忙！';
  // token失效重新登陆
  if (res.data.code === 1000001) {
    // return router.replace({ name: 'login' });
  }

  return {
    err: console.error({
      code: res.data.errcode || res.data.code,
      msg: res.data.errmsg || errStr,
    }),
  };
};

export default function (params:object) {
  return 'success'
}
