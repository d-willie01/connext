import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import { Stack } from 'expo-router'
import { StateContext } from "../../state/stateManagement";

export default function _layout() {
    
const {UState} = useContext(StateContext);
console.log(UState);




return (
    <Stack>
        <Stack.Screen options={{
            headerShown: false
        }} name = "index"/>
        <Stack.Screen name = "(tabs)"/>
    </Stack>
)

  
}