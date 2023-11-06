import React, { Suspense } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
const LiveGamesContainer = React.lazy(() => import("./LiveGamesContainer"));

const LiveGames: React.FC = () => {
  return (
    <div >
      <h2 className="text-lg lg:text-xl font-bold mt-2">Live Games</h2>
      <ErrorBoundary>
        <Suspense fallback={<div>Loading...</div>}>
          <LiveGamesContainer />
        </Suspense>
      </ErrorBoundary>
    </div >
  )
}

export default LiveGames;