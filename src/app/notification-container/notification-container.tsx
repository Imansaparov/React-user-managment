import { ToastContainer } from "react-toastify";

import { styles } from "./styles.ts";

export const NotificationContainer = () => {
  return (
    <ToastContainer
      hideProgressBar
      closeOnClick
      draggable
      pauseOnHover
      closeButton={false}
      theme="colored"
      position="top-right"
      className={styles.toast}
    />
  );
};
