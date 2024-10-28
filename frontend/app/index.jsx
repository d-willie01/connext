import { View, Text, Button } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

export default function index() {
  return (
    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>
      Welcome

      <Link href="/auth">
      <Button title="Login"/>
      </Link>
    </View>
  )
}