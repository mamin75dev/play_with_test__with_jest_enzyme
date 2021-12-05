import { Toast, ToastTypes } from "../utils/Toast";
import { ErrorResponse } from "./interfaces";

class ErrorHandler {
  statusCode: number;
  message: string;
  data: any[];
  decissionBasedOnStatusCode: any;

  constructor(error: ErrorResponse) {
    this.statusCode = error.statusCode;
    this.message = error.message;
    this.data = error.data
    this.initErrorHandler();
  }

  initErrorHandler(): void {
    this.decissionBasedOnStatusCode = {
      400: () => {
        new Toast(ToastTypes.error, this.message).show();
        return Promise.reject(this.message);
        /**
         * You can add some code here for handling this error.
         */
      },
      401: () => {
        new Toast(ToastTypes.error, this.message || 'Unathorized. Login again.').show();
        return Promise.reject('Unathorized. Login again.');
        /**
         * You can add some code here for handling this error.
         */
      },
      403: () => {
        new Toast(ToastTypes.error, 'Forbidden').show();
        return Promise.reject('Forbidden');

        /**
         * You can add some code here for handling this error.
         */
      },
      404: () => {
        new Toast(ToastTypes.error, 'Requested URL not found!').show()
        return Promise.reject('Not Found!');
        /**
         * You can add some code here for handling this error.
         */
      },
      500: () => {
        new Toast(ToastTypes.error, 'Internal error, try again Later please!').show();
        return Promise.reject('Internal error!');
        /**
         * You can add some code here for handling this error.
         */
      },

      /**
       * and so on ...
       * You can add other status codes based on your api service
       */
    }
  }

  handler(): Promise<any> {
    if (__DEV__) {
      console.log(`log::: request error -> ${this.statusCode} == ${this.message}`);
    }
    return this.decissionBasedOnStatusCode[this.statusCode]();
  }
}

export { ErrorHandler }