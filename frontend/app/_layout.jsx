import { View, Text } from 'react-native'
import React, {useContext} from 'react'
import {Stack, Tabs} from 'expo-router'
import StateProvider from '../state/stateManagement'

export default function _layout() {

 

  return (
    <StateProvider>
    <Stack screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen options={{
            headerShown: false
        }} name="index"/>
    </Stack>
    </StateProvider>

  )
}