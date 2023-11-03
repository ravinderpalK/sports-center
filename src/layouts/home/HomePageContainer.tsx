import React from "react"
import LiveGames from "../../views/live_games";
import Articles from "../../views/articles";
import Filter from "../../views/filtered_articles";

const HomePageContainer: React.FC = () => {
  return (
    <div className="mx-auto w-16/17">
      <LiveGames />
      <h2 className="font-bold text-xl">Trending News</h2>
      <div className="flex flex-col lg:flex-row mt-2 h-5/6 ">
        <div className="w-full order-2 lg:order-1 lg:w-4/5 bg-gray-100 ">
          <Articles />
        </div>
        <div className="w-full order-1 lg:w-1/5 bg-gray-200">
          <Filter />
        </div>
      </div>
    </div>
  )
};

export default HomePageContainer;