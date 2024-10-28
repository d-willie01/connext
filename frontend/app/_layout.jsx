import { View, Text } from 'react-native'
import React from 'react'
import {Stack, Tabs} from 'expo-router'

export default function _layout() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen options={{
            headerShown: false
        }} name="index"/>
        <Stack.Screen name = '(tabs)'/>
        <Stack.Screen name = 'auth'/>
    </Stack>

  )
}