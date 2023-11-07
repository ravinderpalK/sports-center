import React, { Suspense } from "react";
import Appbar from "./Appbar";
import { Outlet } from "react-router-dom";
import ErrorBoundary from "../../components/ErrorBoundary";


const HomeLayout: React.FC = () => {

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-none">
        <Appbar />
      </div>
      <div className="flex-auto">
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