import React, { useEffect, useRef } from "react"
import Filter from "../filtered_articles";
import Articles from "../articles";
import LiveGames from "../live_games";
import { usePreferencesDispatch } from "../../context/user_preferences/context";
import { fetchPreferences } from "../../context/user_preferences/actions";


const HomePage: React.FC = () => {
  const newsRef = useRef<HTMLDivElement | null>(null);

  const scrollToTop = () => newsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const isAuthenticated = !!localStorage.getItem("authToken");
  const prefrencesDispatch = usePreferencesDispatch();

  useEffect(() => {
    if (isAuthenticated) {
      fetchPreferences(prefrencesDispatch);
    }
  }, [prefrencesDispatch]);

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

export default HomePage;