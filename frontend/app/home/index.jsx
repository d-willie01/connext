import React, {useState} from 'react';
import { Button, View, TextInput } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import { useRouter } from 'expo-router';


export default function App() {

  
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_API,
    scopes:['openid', 'profile', 'email'],
    redirectUri: `${process.env.EXPO_PUBLIC_BASE_URL}`,
  });

  React.useEffect(() => {
  
    console.log(response)
    if (response?.type === 'success') {
      console.log(response)
      const { authentication } = response;
      // Send token to backend for validation and user creation

      //push user to homescreen
      
      router.replace('/home/(tabs)');
    }
  }, [response]);

  const getLogin = () =>{
      console.log(username)
      console.log(password)
  }

  return (
    
    <View>

<Button
      disabled={!request}
      title="Login with Google"
      onPress={() => {
        promptAsync();
      }}
    />
   

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
  );
}
// import { View, Text, Button, TextInput } from 'react-native'
// import React, {useContext, useState} from 'react'
// import { StateContext } from '../../state/stateManagement';
// import { Link, useRouter } from 'expo-router';
// import axios from 'axios'

// export default function Login() {


// const {UserState} = useContext(StateContext);
// const [username, setUsername] = useState("");
// const [password, setPassword] = useState("");


//   const getLogin = async() =>{


//     try {
//       const {data} = await axios.get('http://localhost:5000/login')

//     console.log(data)

//     return data
      
//     } catch (error) {
//       console.log(error)
//     }
    
    
//   }



//     const loginUser = () => {
//       console.log(username, password)
//         //UserState()
//     }
   
//   return (

    // <View>
    //   <Text>LOGIN</Text>

    //   <TextInput onChangeText={(value) => setUsername(value)} title="login"
    //    style={{
    //     backgroundColor:'yellow'
    //   }}/>

    //   <TextInput onChangeText={(value) => setPassword(value)} title="password" style={{
    //     backgroundColor:'red'
        
    //   }}/>

    //   <Button onPress={getLogin} style={{

    //   }} title ="login"/>
    
    
    // </View>
//   )
// }


//redirect uri attempt to close the window after authentication

// const redirectUri = AuthSession.makeRedirectUri({
//   native: `${process.env.EXPO_PUBLIC_BASE_URL}/home/(tabs)`, // For iOS/Android standalone apps
//   useProxy: true,                // This adds Expo's redirect proxy for Expo Go in development
//   // You can add a custom URI for production web apps if needed
// });