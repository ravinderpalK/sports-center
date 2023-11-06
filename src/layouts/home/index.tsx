import React, { Suspense, useEffect } from "react";
import Appbar from "./Appbar";
import { usePreferencesDispatch } from "../../context/user_preferences/context";
import { fetchPreferences } from "../../context/user_preferences/actions";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";


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
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default HomeLayout;