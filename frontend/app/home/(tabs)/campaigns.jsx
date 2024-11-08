import { View, Text, Button } from 'react-native'
import React, {useEffect, useState} from 'react'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function campaigns() {

const [testText, setTestText] = useState()

const testEndpoint = async() =>{

  const value = await AsyncStorage.getItem('AccessToken');
  

    try {

      const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/users/self`,{
        headers:
        {
          'Authorization': `Bearer ${value}`
        }
      })

      console.log(response)
      setTestText(response.data.email)
      
    } catch (error) {
      
      console.log(error)
    }
  
}


  return (
    <View style={{flex:1, alignContent:"center", justifyContent:'center'}}>
      <Button onPress={testEndpoint} style={{
        
      }} title='START NEW CAMPAIGN'/>


<Button style={{
        
      }} title='CHECK EXISTING CAMPAIGN'/>

      
       {testText && (
        <View> 
          <Text>{testText}</Text>
        </View>
      )}

    </View>
  )
}