import React, { useContext, createContext, useReducer } from "react";

// create dataLayer
export const StateContext = createContext();

// Wrap our app and provide the data
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// pull date from the data layer
export const useStateValue = () => useContext(StateContext);
