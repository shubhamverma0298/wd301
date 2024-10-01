import React, { createContext, useContext, useReducer } from "react";
import { membersReducer, initialState, MembersState, MembersActions } from "./reducer";
export const useMembersState = () => useContext(MembersStateContext);
// Create a context for accessing the members dispatch function
type MembersDispatch = React.Dispatch<MembersActions>;
const MembersDispatchContext = createContext<MembersDispatch | undefined>(undefined);
const MembersStateContext = createContext<MembersState | undefined>(undefined);
// Define a custom hook for conveniently accessing the members dispatch function
export const useMembersDispatch = () => useContext(MembersDispatchContext);
// Create a provider component that wraps its children with the context providers for both state and dispatch
export const MembersProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  // Initialize the state using useReducer with the specified reducer and initial state
  const [state, dispatch] = useReducer(membersReducer, initialState);
  return (
    <MembersStateContext.Provider value={state}>
      <MembersDispatchContext.Provider value={dispatch}>
        {children}
      </MembersDispatchContext.Provider>
    </MembersStateContext.Provider>
  );
};