import React from "react";

export interface Match {
  id: number;
  name: string;
  location: string;
  sportName: string;
  startsAt?: string,
  score?: any,
  endsAt: string;
  isRunning: false;
  playingTeam?: number,
  story?: string,
  teams: Team[];
}


interface Team {
  id: number;
  name: string;
}

export interface MatchesState {
  matches: Match[];
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export enum MatchesAvailableActions {
  FETCH_MATCHES_REQUEST = "FETCH_ALL_MATCHES_REQUEST",
  FETCH_MATCHES_SUCCESS = "FETCH_ALL_MATCHES_SUCCESS",
  FETCH_MATCHES_FAILURE = "FETCH_ALL_MATCHES_FAILURE",

  FETCH_MATCH_REQUEST = "FETCH_MATCH_REQUEST",
  FETCH_MATCH_SUCCESS = "FETCH_MATCH_SUCCESS",
  FETCH_MATCH_FAILURE = "FETCH_MATCH_FAILURE",
}

export type MatchesActions =
  { type: MatchesAvailableActions.FETCH_MATCHES_REQUEST } |
  { type: MatchesAvailableActions.FETCH_MATCHES_SUCCESS, payload: Match[] } |
  { type: MatchesAvailableActions.FETCH_MATCHES_FAILURE, payload: string } |

  { type: MatchesAvailableActions.FETCH_MATCH_REQUEST } |
  { type: MatchesAvailableActions.FETCH_MATCH_SUCCESS, payload: Match } |
  { type: MatchesAvailableActions.FETCH_MATCH_FAILURE, payload: string };


export type MatchesDispatch = React.Dispatch<MatchesActions>; 