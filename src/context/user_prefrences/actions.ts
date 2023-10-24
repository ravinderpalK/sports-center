import { API_ENDPOINT } from "../../config/constants";
import { PrefrencesAvailableActions, PrefrencesDispatch } from "./types";

export const fetchPrefrences = async (dispatch: PrefrencesDispatch) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: PrefrencesAvailableActions.FETCH_PREFRENCES_REQUEST });
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
    dispatch({ type: PrefrencesAvailableActions.FETCH_PREFRENCES_SUCCESS, payload: data.preferences });
  }
  catch (error) {
    console.log(error);
    dispatch({ type: PrefrencesAvailableActions.FETCH_PREFRENCES_FAILURE, payload: "unable to fetch user prefrences" });
  }
}

export const updatePrefrences = async (dispatch: PrefrencesDispatch, prefrences: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: PrefrencesAvailableActions.UPDATE_PREFRENCES_REQUEST });
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
    dispatch({ type: PrefrencesAvailableActions.UPDATE_PREFRENCES_SUCCESS });
  }
  catch (error) {
    console.log(error);
    dispatch({ type: PrefrencesAvailableActions.FETCH_PREFRENCES_FAILURE, payload: "failed to update user prefrences" });
  }
}