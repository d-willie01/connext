import React from "react";
import { createContext, useState, useEffect } from "react";


export const StateContext = createContext();

const StateProvider = ({children}) => {
    
const [UState, setUState] = useState(null);
const [loading, isLoading] = useState(false);



    return (
        <StateContext.Provider value ={{ UserState: () =>{
            setUState(true)
        }, UState, LogoutUser: () =>{
            setUState(false)
        }, setLoadingOn: () =>{
            isLoading(true)
        }, setLoadingOff: () =>{
            isLoading(false)
        }, loading
         }} >
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;

