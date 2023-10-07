import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/home";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />
  },
])

export default router;