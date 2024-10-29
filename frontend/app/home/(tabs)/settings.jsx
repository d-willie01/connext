import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function settings() {
  return (
    <View>
      <Text>settings</Text>

      <Link href={"/"}>
      <Button title="Logout"/>
      </Link>
      
    </View>
  )
}