// SET UP DATALAYER
// WE NEED THIS TO TRACK THE BASKET

import React, {createContext, useContext, useReducer} from "react";

// THIS IS THE DAAT LAYER
export const StateContext = createContext();

//BUILD A PROVIDER
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// THIS IS HOW WE USE IT INSIDE A COMPONENT
export const useStateValue = () => useContext(StateContext);