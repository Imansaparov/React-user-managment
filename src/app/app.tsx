
import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { NotificationContainer } from "./notification-container";


export const App = () => {
  return (
    <>
      <NotificationContainer />
      <RouterProvider router={router} />
    </>
  );
};
