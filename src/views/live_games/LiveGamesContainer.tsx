import { useEffect } from "react";
import { fetchAllMatches } from "../../context/matches/actions";
import { useMatchesDispatch } from "../../context/matches/context";
import LiveGamesList from "./LiveGamesList";

const LiveGamesListContainer = () => {
  const matchesDispatch = useMatchesDispatch();
  useEffect(() => {
    fetchAllMatches(matchesDispatch);
  }, [matchesDispatch]);
  return (
    <div className="my-2">
      <LiveGamesList />
    </div>
  )
}

export default LiveGamesListContainer;