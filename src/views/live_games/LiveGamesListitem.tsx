import { useState } from "react";
import { API_ENDPOINT } from "../../config/constants";
import { Match } from "../../context/matches/types";


const LiveGamesListItem = (props: any) => {
  const [match, setMatch] = useState<Match>(props.match);
  const [isLoading, setIsLoading] = useState<Boolean>(false);

  const refreshScores = async (id: number) => {
    try {
      setIsLoading(true);
      const response = await fetch(`${API_ENDPOINT}/matches/${id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      if (!response)
        throw new Error("fetch matches failure");

      const data = await response.json();
      setMatch(data);
      setIsLoading(false);
    }
    catch (error) {
      console.log(error);
    }
  }

  if (isLoading)
    return <div className="border-2 rounded mr-6 my-2 h-28 w-64 p-2 bg-gray-100">Loading..</div>;

  return (
    <div className="relative border-2 rounded mr-6 my-2 h-28 w-64 p-2 bg-gray-100">
      <div className="font-semibold">{match.sportName}</div>
      <div className="text-sm">{match.location}</div>
      <div className="text-sm">
        <span className="font-semibold">{match.teams[0].name}</span>
        <span className="float-right">{match.score[match.teams[0].name]}</span>
      </div>
      <div className="text-sm">
        <span className="font-semibold">{match.teams[1].name}</span>
        <span className="float-right">{match.score[match.teams[1].name]}</span>
      </div>
      <button onClick={() => refreshScores(match.id)} className="absolute top-2 right-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </div>
  );
}

export default LiveGamesListItem;