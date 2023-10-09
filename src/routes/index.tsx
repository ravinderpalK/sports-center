import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/home";
import { MatchesProvider } from "../context/matches/context";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MatchesProvider>
        <HomeLayout />
      </MatchesProvider>
    )
  },
])

export default router;