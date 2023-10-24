import { Reducer } from "react";
import { Prefrences, PrefrencesActions, PrefrencesAvailableActions, PrefrencesState } from "./types";

const initialPrefrences: Prefrences = {
  sports: [],
  teams: []
}

export const initialUserPrefrencesState = {
  prefrences: initialPrefrences,
  isLoading: false,
  isError: false,
  errorMessage: ""
}

export const prefrencesReducer: Reducer<PrefrencesState, PrefrencesActions> = (state = initialUserPrefrencesState, action): PrefrencesState => {
  switch (action.type) {
    case PrefrencesAvailableActions.FETCH_PREFRENCES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case PrefrencesAvailableActions.FETCH_PREFRENCES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        prefrences: action.payload,
      }
    case PrefrencesAvailableActions.FETCH_PREFRENCES_FAILURE:
      return {
        ...state,
        isError: true,
        errorMessage: action.payload,
      }
    case PrefrencesAvailableActions.UPDATE_PREFRENCES_REQUEST:
      return {
        ...state,
        isLoading: true,
      }
    case PrefrencesAvailableActions.UPDATE_PREFRENCES_SUCCESS:
      return {
        ...state,
        isLoading: false,
      }
    case PrefrencesAvailableActions.UPDATE_PREFRENCES_FAILURE:
      return {
        ...state,
        isError: true,
        errorMessage: action.payload,
      }
  }
} 