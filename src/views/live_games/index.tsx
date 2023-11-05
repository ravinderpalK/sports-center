import React from "react";
import LiveGamesContainer from "./LiveGamesContainer";

const LiveGames: React.FC = () => {
  return (
    <div >
      <h2 className="text-lg lg:text-xl font-bold mt-2">Live Games</h2>
      <LiveGamesContainer />
    </div >
  )
}

export default LiveGames;