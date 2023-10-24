
export interface Prefrences {
  sports: string[],
  teams: string[]
}

export interface PrefrencesState {
  prefrences: Prefrences,
  isLoading: boolean;
  isError: boolean;
  errorMessage: string;
}

export enum PrefrencesAvailableActions {
  FETCH_PREFRENCES_REQUEST = "FETCH_PREFRENCES_REQUEST",
  FETCH_PREFRENCES_SUCCESS = "FETCH_PREFRENCES_SUCCESS",
  FETCH_PREFRENCES_FAILURE = "FETCH_PREFRENCES_FAILURE",

  UPDATE_PREFRENCES_REQUEST = "UPDATE_PREFRENCES_REQUEST",
  UPDATE_PREFRENCES_SUCCESS = "UPDATE_PREFRENCES_SUCCESS",
  UPDATE_PREFRENCES_FAILURE = "UPDATE_PREFRENCES_FAILURE",
}

export type PrefrencesActions =
  { type: PrefrencesAvailableActions.FETCH_PREFRENCES_REQUEST } |
  { type: PrefrencesAvailableActions.FETCH_PREFRENCES_SUCCESS, payload: Prefrences } |
  { type: PrefrencesAvailableActions.FETCH_PREFRENCES_FAILURE, payload: string } |

  { type: PrefrencesAvailableActions.UPDATE_PREFRENCES_REQUEST } |
  { type: PrefrencesAvailableActions.UPDATE_PREFRENCES_SUCCESS } |
  { type: PrefrencesAvailableActions.UPDATE_PREFRENCES_FAILURE, payload: string };

export type PrefrencesDispatch = React.Dispatch<PrefrencesActions>;