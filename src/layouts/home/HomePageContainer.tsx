import React from "react"
import LiveGames from "../../views/live_games";
import Articles from "../../views/articles";
import Filter from "../../views/filter";

const HomePageContainer: React.FC = () => {
  return (
    <div className="mx-6">
      <LiveGames />
      <h2>Trending News</h2>
      <div className="flex">
        <div className="w-4/5 border-2">
          <Articles />
        </div>
        <div className="border-2 w-1/5">
          <Filter />
        </div>
      </div>
    </div>
  )
};

export default HomePageContainer;