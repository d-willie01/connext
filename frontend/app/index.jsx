import { View, Text, Button } from 'react-native'
import React, {useContext, useEffect} from 'react'
import { Link } from 'expo-router'
import { StateContext } from '../state/stateManagement'

export default function index() {
  
  const {resetUser, UState} = useContext(StateContext);
 

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