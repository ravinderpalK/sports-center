import React, { useEffect } from "react";
import Appbar from "./Appbar";
import { usePreferencesDispatch } from "../../context/user_preferences/context";
import { fetchPreferences } from "../../context/user_preferences/actions";
import { Outlet } from "react-router-dom";


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
    <div className="h-screen flex flex-col">
      <div className="relative z-20 flex-none">
        <Appbar />
      </div>
      <div className="relative z-0 flex-auto">
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout;