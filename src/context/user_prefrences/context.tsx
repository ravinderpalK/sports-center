import React, { createContext, useContext, useReducer } from "react";
import { initialUserPrefrencesState, prefrencesReducer } from "./reducer";
import { PrefrencesDispatch, PrefrencesState } from "./types";


const PrefrencesStateContext = createContext<PrefrencesState>(initialUserPrefrencesState);
const PrefrencesDispatchContext = createContext<PrefrencesDispatch>(() => { });

export const PrefrencesProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [state, dispatch] = useReducer(prefrencesReducer, initialUserPrefrencesState);
  return (
    <PrefrencesStateContext.Provider value={state}>
      <PrefrencesDispatchContext.Provider value={dispatch}>
        {children}
      </PrefrencesDispatchContext.Provider>
    </PrefrencesStateContext.Provider>
  )
}

export const usePrefrencesState = () => useContext(PrefrencesStateContext);
export const usePrefrencesDispatch = () => useContext(PrefrencesDispatchContext);  