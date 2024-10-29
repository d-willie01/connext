import { View, Text, Button } from 'react-native'
import React, {useContext} from 'react'
import { StateContext } from '../../state/stateManagement';

export default function Login() {

const {UserState, UState} = useContext(StateContext);


    const loginUser = () => {
        UserState();
        
    }
    
    console.log(UState)
  return (

    <View>
      <Text>LOGIN</Text>

      <Button onPress={loginUser} title ="login"/>
    </View>
  )
}