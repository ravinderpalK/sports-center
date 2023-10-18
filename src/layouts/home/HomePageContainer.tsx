import React from "react"
import LiveGames from "../../views/live_games";
import Articles from "../../views/articles";
import Filter from "../../views/filtered_articles";

const HomePageContainer: React.FC = () => {
  return (
    <div className="mx-6">
      <LiveGames />
      <h2 className="font-bold text-xl">Trending News</h2>
      <div className="flex mt-2">
        <div className="w-4/5 bg-gray-100">
          <Articles />
        </div>
        <div className="w-1/5 bg-gray-200">
          <Filter />
        </div>
      </div>
    </div>
  )
};

export default HomePageContainer;