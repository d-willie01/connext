import { View, Text, Button } from 'react-native'
import React, {useContext} from 'react'
import { Link } from 'expo-router'
import { StateContext } from '../state/stateManagement'

export default function index() {
  
  const {UState} = useContext(StateContext);
  console.log(UState)

  return (


    <View style={{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    }}>
      Welcome

      <Link href="/home">
      <Button title="Login"/>
      </Link>
    </View>
  )

}