import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

export default function layout() {
  return (
    <Stack screenOptions={{
      headerShown: false
    }}>
        <Stack.Screen options={{
            headerShown: false
        }} name="login"/>
        <Stack.Screen options={{
            headerShown: false
        }} name="register"/>
    </Stack>
  )
}