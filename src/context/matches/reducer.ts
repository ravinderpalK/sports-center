import { Reducer } from "react";
import { MatchesActions, MatchesAvailableActions, MatchesState } from "./types";

export const initialMatchesState: MatchesState = {
  matches: [],
  isLoading: false,
  isError: false,
  errorMessage: ""
}

export const matchesReducer: Reducer<MatchesState, MatchesActions> = (state = initialMatchesState, action): MatchesState => {
  switch (action.type) {
    case MatchesAvailableActions.FETCH_MATCHES_REQUEST:
      return {
        ...state,
        isLoading: true
      };
    case MatchesAvailableActions.FETCH_MATCHES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        matches: action.payload,
      };
    case MatchesAvailableActions.FETCH_MATCHES_FAILURE:
      return {
        ...state,
        isError: true,
        errorMessage: action.payload
      };
    case MatchesAvailableActions.FETCH_MATCH_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case MatchesAvailableActions.FETCH_MATCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case MatchesAvailableActions.FETCH_MATCH_FAILURE:
      return {
        ...state,
        isError: true
      }
    default:
      return state;
  }
}