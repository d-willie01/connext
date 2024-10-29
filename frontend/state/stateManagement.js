import React from "react";
import { createContext, useState, useEffect } from "react";
import { useSegments, useRouter } from "expo-router";

export const StateContext = createContext();

const StateProvider = ({children}) => {
    
const rootSegement = useSegments()[0];
const router = useRouter();  
const [UState, setUState] = useState(null);
const [userToken, setUserToken] = useState(undefined);

//useEffect checking for value of UState while also checking the segment of the route. basic and essential Auth is a GO

useEffect(() =>{

        if (UState === null) return

        if (UState === true && rootSegement !== "(app)")
        {
            router.replace("/home/(tabs)")
        }
        if (UState === false && rootSegement !== "(app)")
            {
                router.replace("/")
            }


    },[UState, rootSegement])


    return (
        <StateContext.Provider value ={{ UserState: () =>{
            setUState(true)
        }, UState, LogoutUser: () =>{
            setUState(false)
        }, resetUser: () =>{
            setUState(null)
        } }} >
            {children}
        </StateContext.Provider>
    )
}

export default StateProvider;


// const UserState = () => {
        
    //     setUState("");
    //     console.log('kiggly')
        

    
    // }

    // const LogoutUser = () =>{
    //     setUState(null)
    // }