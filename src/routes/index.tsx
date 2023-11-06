import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/home";
import Signin from "../views/signin";
import Signup from "../views/signup";
import Signout from "../views/singnout";
import HomePage from "../views/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeLayout />
    ),
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "signin",
        element: <Signin />
      },
      {
        path: "signup",
        element: <Signup />
      },
      {
        path: "signout",
        element: <Signout />
      },
    ]
  },

])

export default router;