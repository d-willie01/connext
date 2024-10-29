import { View, Text, Button, TextInput } from 'react-native'
import React, {useContext, useState} from 'react'
import { StateContext } from '../../state/stateManagement';
import { Link, useRouter } from 'expo-router';
import axios from 'axios'

export default function Login() {


const {UserState} = useContext(StateContext);
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");


  const getLogin = async() =>{


    try {
      const {data} = await axios.post('http://localhost:5000/api/contacts/add')

    console.log(data)

    return data
      
    } catch (error) {
      console.log(error)
    }
    
    
  }



    const loginUser = () => {
      console.log(username, password)
        //UserState()
    }
   
  return (

    <View>
      <Text>LOGIN</Text>

      <TextInput onChangeText={(value) => setUsername(value)} title="login"
       style={{
        backgroundColor:'yellow'
      }}/>

      <TextInput onChangeText={(value) => setPassword(value)} title="password" style={{
        backgroundColor:'red'
        
      }}/>

      <Button onPress={getLogin} style={{

      }} title ="login"/>
    
    
    </View>
  )
}