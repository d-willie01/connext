
import { Stack } from 'expo-router'

export default function _layout() {
    
return (
    <Stack>
        <Stack.Screen options={{
            headerShown: false
        }} name = "index"/>
        <Stack.Screen options={{
            headerShown: false
        }} name = "(tabs)"/>
    </Stack>
    )  
}