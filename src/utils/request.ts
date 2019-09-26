import axios, { AxiosResponse, AxiosRequestConfig, AxiosError, AxiosInstance } from 'axios';
import { notification, message } from 'antd';

const logInfo = (msg: any): void => {
  console.log(`${msg}=======> `, msg);
};
class HttpQueue {
  private queue: {
    [key: string]: boolean;
  };
  private closeLoading = () => {};
  constructor() {
    this.queue = {};
  }
  addQueue(url: string) {
    if (!Object.keys(this.queue).length) {
      // show loading
      this.closeLoading = message.loading('loading...', 0);
    }
    this.queue[url] = true;
  }
  removeQueue(url: string) {
    delete this.queue[url];
    if (!Object.keys(this.queue).length) {
      // hide loading
      this.closeLoading();
    }
  }
}

class HttpRequest extends HttpQueue {
  // 默认选项
  static defaultOptions: AxiosRequestConfig = {
    timeout: 1000 * 10,
  };
  // 请求发生错误的提示
  private errorMsg: { [key: number]: string } = {
    400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
    401: '用户没有权限（令牌、用户名、密码错误）。',
    403: '用户得到授权，但是访问是被禁止的。',
    404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
    406: '请求的格式不可得。',
    410: '请求的资源被永久删除，且不会再得到的。',
    422: '当创建一个对象时，发生一个验证错误。',
    500: '服务器发生错误，请检查服务器。',
    502: '网关错误。',
    503: '服务不可用，服务器暂时过载或维护。',
    504: '网关超时。',
  };

  private instance: AxiosInstance;

  constructor() {
    super();
    this.instance = this.createInstance();
  }
  createInstance = (): AxiosInstance => {
    const instance = axios.create(HttpRequest.defaultOptions);
    // 添加请求拦截器
    instance.interceptors.request.use(
      config => {
        // 在发送请求之前做些什么
        return config;
      },
      error => {
        // 对请求错误做些什么
        return Promise.reject(error);
      },
    );

    // 添加响应拦截器
    instance.interceptors.response.use(
      response => {
        return this.successHandler(response);
      },
      error => {
        // 对响应错误做点什么
        this.errorHandler(error);
      },
    );

    return instance;
  };
  /**
   * 成功处理程序
   */
  successHandler = (
    response: AxiosResponse<{ result: boolean; msg?: string; message?: string }>,
  ): AxiosResponse => {
    const { data } = response;
    if (data.result === false) {
      notification.error({
        message: `错误`,
        description: data.msg || data.message,
      });
    }
    return response;
  };

  /**
   * 异常处理程序
   */
  errorHandler = (error: AxiosError): void => {
    if (error.response && error.response.status) {
      const { status, statusText } = error.response;
      const errorText = this.errorMsg[status] || statusText;
      notification.error({
        message: `请求错误 ${status}`,
        description: errorText,
      });
    } else {
      notification.error({
        description: '您的网络发生异常，无法连接服务器',
        message: '网络异常',
      });
    }
  };

  fetch = async (options: AxiosRequestConfig & { url: string }) => {
    const { url } = options;
    this.addQueue(url);
    const res = await this.instance(url, options);
    logInfo(res);
    this.removeQueue(url);
    return res && res.data;
  };
}

const HTTP = new HttpRequest();

export default HTTP.fetch;
