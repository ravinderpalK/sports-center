import { API_ENDPOINT } from "../../config/constants";
import { PreferencesAvailableActions, PreferencesDispatch } from "./types";

export const fetchPreferences = async (dispatch: PreferencesDispatch) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: PreferencesAvailableActions.FETCH_PREFERENCES_REQUEST });
    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!response)
      throw new Error("cannot fetch user prefrences");

    const data = await response.json();
    dispatch({ type: PreferencesAvailableActions.FETCH_PREFERENCES_SUCCESS, payload: data.preferences });
  }
  catch (error) {
    console.log(error);
    dispatch({ type: PreferencesAvailableActions.FETCH_PREFERENCES_FAILURE, payload: "unable to fetch user prefrences" });
  }
}

export const updatePreferences = async (dispatch: PreferencesDispatch, prefrences: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: PreferencesAvailableActions.UPDATE_PREFERENCES_REQUEST });
    const response = await fetch(`${API_ENDPOINT}/user/preferences`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(prefrences),
    });

    if (!response)
      throw new Error("cannot fetch user prefrences");
    fetchPreferences(dispatch);
    dispatch({ type: PreferencesAvailableActions.UPDATE_PREFERENCES_SUCCESS });
  }
  catch (error) {
    console.log(error);
    dispatch({ type: PreferencesAvailableActions.FETCH_PREFERENCES_FAILURE, payload: "failed to update user prefrences" });
  }
}