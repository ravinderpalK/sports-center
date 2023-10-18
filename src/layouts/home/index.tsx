import React from "react";
import Appbar from "./Appbar";
import HomePageContainer from "./HomePageContainer";


const HomeLayout: React.FC = () => {
  return (
    <div className="h-screen">
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