import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HomeLayout />
    )
  },
])

export default router;