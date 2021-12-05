import { AxiosRequestConfig, AxiosResponse } from "axios";

interface RequestConfig extends AxiosRequestConfig {
  authorization?: boolean;
  resolve?: any;
  reject?: any;
}

interface Response extends AxiosResponse { }

interface ErrorResponse {
  statusCode: number;
  message: string;
  data: any[];
}

export { RequestConfig, Response, ErrorResponse }