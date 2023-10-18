import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/home";
import Signin from "../views/signin";
import Signup from "../views/signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeLayout />
    )
  },
  {
    path: "/signin",
    element: <Signin />
  },
  {
    path: "/signup",
    element: <Signup />
  }
])

export default router;