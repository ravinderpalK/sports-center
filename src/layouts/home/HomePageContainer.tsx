import React, { useRef } from "react"
import LiveGames from "../../views/live_games";
import Articles from "../../views/articles";
import Filter from "../../views/filtered_articles";


const HomePageContainer: React.FC = () => {
  const newsRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => window.scrollTo(0, newsRef.current?.offsetTop ?? 0);

  return (
    <div className="mx-auto w-16/17">
      <LiveGames />
      <h2 ref={newsRef} className="font-bold text-lg lg:text-xl">Trending News</h2>
      <div className="flex flex-col lg:flex-row my-2 h-5/6 ">
        <div className="w-full order-2 lg:order-1 lg:w-4/5 bg-gray-100 ">
          <Articles scrollToNewsDiv={scrollToTop} />
        </div>
        <div className="w-full order-1 lg:w-1/5 bg-gray-200">
          <Filter scrollToNewsDiv={scrollToTop} />
        </div>
      </div>
    </div>
  )
};

export default HomePageContainer;