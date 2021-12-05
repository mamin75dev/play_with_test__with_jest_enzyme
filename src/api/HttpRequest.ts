import { RequestConfig } from './interfaces';
import { axios } from './axios/config';
import { ErrorHandler } from './ErrorHandler';
import { Toast, ToastTypes } from '../utils/Toast';

class HttpRequest {
  pendingQueue: RequestConfig[];
  isRun: boolean;
  timeout: number;
  axiosRequest: any;

  constructor() {
    // before send request
    this.pendingQueue = [];
    // flag for run and stop sending request
    this.isRun = false;
    /**
     * if connection is off or other reasons, sen again requests after timeout
     */
    this.timeout = 3000;

    this.axiosRequest = {
      'get': async ({
        method,
        url,
        data,
        params,
        headers,
        authorization,
      }) => {
        const config: RequestConfig = { method, url, params, headers, authorization };
        return await axios(config);
      },
      'post': async ({
        method,
        url,
        data,
        params,
        headers,
        authorization,
      }) => {
        const config: RequestConfig = { method, url, data, headers, authorization };
        return await axios(config);
      },
      'put': async ({
        method,
        url,
        data,
        params,
        headers,
        authorization,
      }) => {
        const config: RequestConfig = { method, url, data, headers, authorization };
        return await axios(config);
      },
      'delete': async ({
        method,
        url,
        data,
        params,
        headers,
        authorization,
      }) => {
        const config: RequestConfig = { method, url, params, headers, authorization };
        return await axios(config);
      },
    }

  }

  /**
   * ====================
   *     GET REQUEST
   * ====================
   * @param url 
   * @param params 
   * @param headers 
   * @param authorization 
   * @returns Promise
   */
  get(
    url: string,
    params: any = {},
    headers: any = {},
    authorization: boolean = true
  ): Promise<any> {
    return this.add({ method: 'get', url, params, headers, authorization });
  }

  /**
   * =====================
   *     POST REQUEST
   * =====================
   * @param url 
   * @param data 
   * @param headers 
   * @param authorization 
   * @returns 
   */
  post(
    url: string,
    data: any = {},
    headers: any = {},
    authorization: boolean = true
  ): Promise<any> {
    return this.add({ method: 'post', url, data, headers, authorization });
  }

  /**
   * ====================
   *     PUT REQUEST
   * ====================
   * @param url 
   * @param data 
   * @param headers 
   * @param authorization 
   * @returns 
   */
  put(
    url: string,
    data: any = {},
    headers: any = {},
    authorization: boolean = true
  ): Promise<any> {
    return this.add({ method: 'put', url, data, headers, authorization });
  }

  /**
   * ====================
   *     GET REQUEST
   * ====================
   * @param url 
   * @param params 
   * @param headers 
   * @param authorization 
   * @returns Promise
   */
  delete(
    url: string,
    params: any = {},
    headers: any = {},
    authorization: boolean = true
  ): Promise<any> {
    return this.add({ method: 'delete', url, params, headers, authorization });
  }

  add({ method, url, data = {}, params = {}, headers = {}, authorization }: RequestConfig): Promise<any> {
    return new Promise((resolve, reject) => {
      this.removeDuplicate(url, data);
      this.send()
    })
  }

  async send({
    method,
    url,
    data,
    params,
    headers,
    authorization,
  }: RequestConfig): Promise<any> {

    let response;
    try {
      const config = {
        method,
        url,
        data,
        params,
        headers,
        authorization
      }
      response = await this.axiosRequest[method](config);
      /**
       * handle statusCodes and make decission for this
       */
      new Toast(ToastTypes.success, response.data.message).show();
      return Promise.resolve(response.data || response);
    } catch (error) {
      /**
       * error handling
       * use ErrorHandler class here
       */
      this.pendingQueue.pop();
      return new ErrorHandler(error.response).handler();
    }
  }

  removeDuplicate(url: string, data: any): void {
    for (let i = 0; this.pendingQueue.length; i++) {
      if (
        JSON.stringify(this.pendingQueue[i].data === JSON.stringify(data)) &&
        this.pendingQueue[i].url === url
      ) {
        this.pendingQueue.splice(i, 1);
      }
    }
  }
}

const httpRequest = new HttpRequest();

export { httpRequest }