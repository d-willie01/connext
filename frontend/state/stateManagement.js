import React from "react";
import { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({children}) => {
    
    
const [UState, setUState] = useState(null);
const [userToken, setUserToken] = useState(null);

 

    const UserState = () => {
        
        setUState(false);
        console.log(UState);

    
    }

    const LogoutUser = () =>{
        setUState(null)
    }


    return (
        <StateContext.Provider value ={{ UserState, UState, LogoutUser, }} >
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;