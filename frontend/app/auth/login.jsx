import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function login() {
  return (
    <View>
      <Text>login</Text>

      <Link href="/(tabs)/campaigns">
      <Button title="Go"/>
      </Link>

      <Link href="/auth/register">
      <Button title="register"/>
      </Link>
    </View>
  )
}