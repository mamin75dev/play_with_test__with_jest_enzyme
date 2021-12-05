import { toast } from "react-toastify";

enum ToastTypes {
  error = 'error',
  warninig = 'warn',
  success = 'success',
  info = 'info'
}

class Toast {
  /**
   * one of ToastTypes(error, warn, info, success);
   */
  type: ToastTypes;
  message: string;

  constructor(type: ToastTypes, msg: string) {
    this.type = type;
    this.message = msg;
  }

  show(): void {
    toast[this.type](this.message, {
      position: "bottom-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
    })
  }
}

export { Toast, ToastTypes }