import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Registration from "../pages/Registration";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <App />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
]);
