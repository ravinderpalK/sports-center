import React, { Reducer, useEffect, useReducer, useState } from "react";
import { API_ENDPOINT } from "../../config/constants";
import { Match } from "../../context/matches/types";

interface MatchDetailsState {
  match: Match | null;
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}
const initialMatchDetails: MatchDetailsState = {
  match: null,
  isLoading: false,
  isError: false,
  errorMessage: "",
}

enum MatchDetailsAvailableActions {
  FETCH_MATCH_REQUEST = "FETCH_MATCH_REQUEST",
  FETCH_MATCH_SUCCESS = "FETCH_MATCH_SUCCESS",
  FETCH_MATCH_FAILURE = "FETCH_MATCH_FAILURE",
}

type MatchDetailsActions =
  { type: MatchDetailsAvailableActions.FETCH_MATCH_REQUEST } |
  { type: MatchDetailsAvailableActions.FETCH_MATCH_SUCCESS, payload: Match } |
  { type: MatchDetailsAvailableActions.FETCH_MATCH_FAILURE, payload: string };

type MatchDetailsDispatch = React.Dispatch<MatchDetailsActions>;

const reducer: Reducer<MatchDetailsState, MatchDetailsActions> = (state, action) => {
  switch (action.type) {
    case MatchDetailsAvailableActions.FETCH_MATCH_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case MatchDetailsAvailableActions.FETCH_MATCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        match: action.payload,
      }
    case MatchDetailsAvailableActions.FETCH_MATCH_FAILURE:
      return {
        ...state,
        isError: true,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

const fetchMatchDetails = async (dispatch: MatchDetailsDispatch, id: number) => {
  try {
    dispatch({ type: MatchDetailsAvailableActions.FETCH_MATCH_REQUEST })
    const response = await fetch(`${API_ENDPOINT}/matches/${id}`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });
    if (!response)
      throw new Error("fetch matches failure");

    const data = await response.json();
    dispatch({ type: MatchDetailsAvailableActions.FETCH_MATCH_SUCCESS, payload: data });
  }
  catch (error) {
    console.log(error);
    dispatch({ type: MatchDetailsAvailableActions.FETCH_MATCH_FAILURE, payload: "fetch match failure" });
  }
}

const LiveGamesListItem = (props: any) => {

  const [state, dispatch] = useReducer(reducer, initialMatchDetails);
  const { match, isLoading } = state;

  useEffect(() => {
    const getMatchDetails = async () => {
      await fetchMatchDetails(dispatch, props.match.id);
    }
    getMatchDetails();
  }, [])

  if (isLoading || !match)
    return <div className="border-2 rounded mr-6 my-2 h-28 w-64 p-2 bg-gray-100">Loading</div>

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
      <button onClick={() => fetchMatchDetails(dispatch, match.id)} className="absolute top-2 right-2">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      </button>
    </div>
  );
}

export default LiveGamesListItem;