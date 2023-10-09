import { useEffect } from "react";
import { fetchAllMatches } from "../../context/matches/actions";
import { useMatchesDispatch } from "../../context/matches/context";
import LiveGamesListItems from "./LiveGamesListItems";

const LiveGamesList = () => {
  const matchesDispatch = useMatchesDispatch();
  useEffect(() => {
    fetchAllMatches(matchesDispatch);
  }, [matchesDispatch]);
  return (
    <div>
      <LiveGamesListItems />
    </div>
  )
}

export default LiveGamesList;