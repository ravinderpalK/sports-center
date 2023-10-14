import { RouterProvider } from "react-router-dom"
import router from "./routes"
import { MatchesProvider } from "./context/matches/context"
import { ArticlesProvider } from "./context/articles/context"
import { TeamsProvider } from "./context/teams/context"
import { SportsProvider } from "./context/sports/context"

function App() {
  return (
    <div>
      <MatchesProvider>
        <ArticlesProvider>
          <TeamsProvider>
            <SportsProvider>
              <RouterProvider router={router} />
            </SportsProvider>
          </TeamsProvider>
        </ArticlesProvider>
      </MatchesProvider>
    </div>
  )
}

export default App
