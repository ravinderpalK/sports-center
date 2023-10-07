import React from "react";
import Appbar from "./Appbar";
import HomePageContainer from "./HomePageContainer";


const HomeLayout: React.FC = () => {
  return (
    <>
      <Appbar />
      <main>
        <HomePageContainer />
      </main>
    </>
  )
}

export default HomeLayout;