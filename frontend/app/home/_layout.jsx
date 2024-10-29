import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { Stack } from 'expo-router'
import { StateContext } from "../../state/stateManagement";

export default function _layout() {
    
const {UState} = useContext(StateContext);
console.log(UState);




return (
    <Stack>
        <Stack.Screen name = "index"/>
        <Stack.Screen name = "(tabs)"/>
    </Stack>
)

// if (UState == )
// {
//     return (
       
//             <Stack>
//             <Stack.Screen name='(tabs)'/>
//             </Stack>
//       )
// }
// else if (UState == 0)
// {
//     return(

//             <Stack>
//             <Stack.Screen name = "index"/>
//             </Stack>
        
//     )
   
// }

  
}