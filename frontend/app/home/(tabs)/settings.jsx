import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { Link } from 'expo-router'
import { StateContext } from '../../../state/stateManagement'

export default function settings() {
  const {LogoutUser} = useContext(StateContext)
  const logoutUser = () =>{
    LogoutUser();
  }
  return (
    <View>
      <Text>settings</Text>

      
      <Button onPress={logoutUser} title="Logout"/>
      
      
    </View>
  )
}