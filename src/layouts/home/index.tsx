import React, { useEffect } from "react";
import Appbar from "./Appbar";
import HomePageContainer from "./HomePageContainer";
import { usePreferencesDispatch } from "../../context/user_preferences/context";
import { fetchPreferences } from "../../context/user_preferences/actions";


const HomeLayout: React.FC = () => {
  const isAuthenticated = !!localStorage.getItem("authToken");
  const prefrencesDispatch = usePreferencesDispatch();
  useEffect(() => {
    console.log(isAuthenticated)
    if (isAuthenticated) {
      fetchPreferences(prefrencesDispatch);
    }
  }, [prefrencesDispatch]);

  return (
    <div>
      <div className="">
        <Appbar />
      </div>
      <div className="">
        <HomePageContainer />
      </div>
    </div>
  )
}

export default HomeLayout;