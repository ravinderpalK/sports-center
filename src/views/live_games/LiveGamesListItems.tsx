import { useEffect, useState } from "react";
import { useMatchesDispatch, useMatchesState } from "../../context/matches/context";
import { fetchMatchDetails } from "../../context/matches/actions";
import { Match, MatchesDispatch } from "../../context/matches/types";

const fetchLiveMatches = async (dispatch: MatchesDispatch, matches: Match[]): Promise<Match[]> => {
  const liveMatches = matches.filter((match) => match.isRunning != false);
  const liveMatchesDetails = await Promise.all(
    liveMatches.map(async (match) => {
      return (await fetchMatchDetails(dispatch, match.id));
    })
  );
  return liveMatchesDetails;
}

const LiveGamesListItems = () => {
  const matchesState = useMatchesState();
  const matchesDispatch = useMatchesDispatch();
  const { matches } = matchesState;
  const [liveMatches, setLiveMatches] = useState<Match[]>();

  useEffect(() => {
    const getLiveMatches = async () => {
      const x = (await fetchLiveMatches(matchesDispatch, matches));
      setLiveMatches(x);
    }
    getLiveMatches();
  }, [matches]);

  return (
    <div className="flex">
      {Array.isArray(liveMatches) && liveMatches.map((match) => {
        return (
          <div key={match.id} className="border-2 mr-6 p-2">
            <div>{match.sportName}</div>
            <div>{match.location}</div>
            <div>{match.teams[0].name}-{match.score[match.teams[0].name]}</div>
            <div>{match.teams[1].name}-{match.score[match.teams[1].name]}</div>
          </div>
        );
      })}
    </div>
  )
}

export default LiveGamesListItems;

