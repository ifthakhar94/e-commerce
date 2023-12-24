import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
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
  {
    path: "/login",
    element: <Login />,
  },
]);
