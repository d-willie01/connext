import React from "react";
import { createContext, useState } from "react";

export const StateContext = createContext();

const StateProvider = ({children}) => {
    
    
const [UState, setUState] = useState(0);
const [userToken, setUserToken] = useState(0);

 

    const UserState = () => {
        
        setUState(1);
        console.log('kiggly')
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