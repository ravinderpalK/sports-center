import { useEffect, useState } from "react";
import { useMatchesDispatch, useMatchesState } from "../../context/matches/context";
import { fetchMatchDetails } from "../../context/matches/actions";
import { Match, MatchesDispatch } from "../../context/matches/types";
import LiveGamesListItem from "./LiveGamesListitem";

const fetchLiveMatches = async (dispatch: MatchesDispatch, matches: Match[]): Promise<Match[]> => {
  const liveMatches = matches.filter((match) => match.isRunning != false);
  const liveMatchesDetails = await Promise.all(
    liveMatches.map(async (match) => {
      const response = await fetchMatchDetails(dispatch, match.id);
      if (!response.ok) return null;
      return response.data;
    })
  );
  return liveMatchesDetails;
}

const LiveGamesList = () => {
  const matchesState = useMatchesState();
  const matchesDispatch = useMatchesDispatch();
  const { matches } = matchesState;

  const [liveMatches, setLiveMatches] = useState<Match[] | null>(null);

  useEffect(() => {
    const getLiveMatches = async () => {
      const x = (await fetchLiveMatches(matchesDispatch, matches));
      setLiveMatches(x);
    }
    getLiveMatches();
  }, [matches]);


  if (liveMatches && liveMatches?.length == 0)
    return <div className="rounded mr-6 my-2 h-28 p-2">Loading...</div>

  return (
    <div className="flex">
      {Array.isArray(liveMatches) && liveMatches.map((match) => {
        return (
          <LiveGamesListItem key={match.id} match={match} />
        )
      })}
    </div>
  )
}

export default LiveGamesList;

