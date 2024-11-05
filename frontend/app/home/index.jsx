import React, {useState} from 'react';
import { Button, View, TextInput } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import { useRouter } from 'expo-router';
import axios from 'axios';


export default function App() {

  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState(""); 

  

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_API,
    responseType:"id_token",
    scopes:['openid', 'profile', 'email'],
    redirectUri: 'https://connext-f0u.pages.dev',
  });

  const sendToken = async(authentication) =>{

    


    console.log(authentication)
    try {
      
      const response = await axios.post('http://localhost:5000/api/auth', {            
          authentication
})
  console.log(response)
  if (response.status == 200)
  {
    router.replace('/home/(tabs)');
  }

    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  React.useEffect(() => {
    
    
    if (response?.type === 'success') {
      
      //extract token from google

     

      const authentication = response.params.id_token
      

      //send token to backend

      console.log(authentication)

      sendToken(authentication)
      
      
      
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
