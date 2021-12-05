import axios from "axios";
import axiosRetry from "axios-retry";

import { RequestConfig } from "../interfaces";

/**
 * write your base URL here
 */
const serverUrl = "";

axios.defaults.baseURL = serverUrl;

axiosRetry(axios, { retries: 3 });

/**
 * log the each request and response to console in dev mode
 */
if (__DEV__) {
  /**
   * log for request
   */
  axios.interceptors.request.use((request) => {
    console.log("log::: req -> ", request);
    return request;
  });

  /**
   * log for response
   */
  axios.interceptors.response.use((response) => {
    console.log("log::: req -> ", response);
    return response;
  });
}

axios.interceptors.request.use(async (config: RequestConfig) => {

  /**
   * set `Content-Type` for each request
   */
  config.headers['Content-Type'] = 'application/json';

  if (config?.authorization !== false) {
    /**
     * get Token from redux or storage in here
     */
    const token = '';
    if (config?.authorization && token === null) {
      return Promise.reject(config);
    }
    /**
     * add token to header of request according to the key in the backend (Authorization)
     */
    config.headers.Authorization = token;
    return Promise.resolve(config);
  };
  return config;
});

export { axios };
