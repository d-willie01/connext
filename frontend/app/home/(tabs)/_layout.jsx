import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

export default function _layout() {
  return (
    <Tabs>
        <Tabs.Screen options={{
          headerShown: false
        }} name ="campaigns"/>
        <Tabs.Screen options={{
          headerShown: false
        }} name ="explore" />
    </Tabs>
  )
}