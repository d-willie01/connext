import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import * as AuthSession from 'expo-auth-session';
import { useRouter } from 'expo-router';
import axios from 'axios';
import { FontAwesome } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';


export default function App() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isNightMode, setIsNightMode] = useState(false);

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: process.env.EXPO_PUBLIC_GOOGLE_API,
    responseType: "id_token",
    scopes: ['openid', 'profile', 'email'],
    redirectUri: 'https://connext-f0u.pages.dev',
  });

  const sendToken = async (authentication) => {
    try {
      const response = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/api/auth`, { authentication });
      if (response.status === 200) {
        router.replace('/home/(tabs)');
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    if (response?.type === 'success') {
      const authentication = response.params.id_token;
      sendToken(authentication);
    }
  }, [response]);

  return (
    <View style={[styles.container, isNightMode ? styles.darkContainer : styles.lightContainer]}>
      <Text style={[styles.title, isNightMode ? styles.darkText : styles.lightText]}>Sign Up to Connext</Text>

      <TextInput
        style={[styles.input, isNightMode ? styles.darkInput : styles.lightInput]}
        placeholder="Enter Phone # To Register"
        placeholderTextColor={isNightMode ? '#B0B0B0' : '#707070'}
        value={email}
        onChangeText={setEmail}
      />
      

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>

      <Text style={[styles.orText, isNightMode ? styles.darkText : styles.lightText]}>or sign up with</Text>
      
      <View style={styles.socialContainer}>
        
        <TouchableOpacity style={styles.socialButton} onPress={() => promptAsync()}><FontAwesome name="google" size={50} color={isNightMode ? "#db4437" : "#db4437"} /></TouchableOpacity>
        
      </View>

      <TouchableOpacity onPress={() => setIsNightMode(!isNightMode)} style={styles.nightModeToggle}>
        <Text style={styles.toggleText}>{isNightMode ? (<View>
          <Feather name="sun" size={24} color="white" />
        </View>) : (<View>
          <Entypo name="moon" size={24} color="black" />
        </View>)}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  lightContainer: {
    backgroundColor: '#FFFFFF',
  },
  darkContainer: {
    backgroundColor: '#1A1A1A',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  lightText: {
    color: '#333333',
  },
  darkText: {
    color: '#FFFFFF',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  lightInput: {
    backgroundColor: '#F7F7F7',
    borderColor: '#CCCCCC',
  },
  darkInput: {
    backgroundColor: '#333333',
    borderColor: '#666666',
  },
  button: {
    backgroundColor: '#007AFF',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  socialButton: {
    padding: 10,
  },
  nightModeToggle: {
    alignSelf: 'center',
    marginTop: 15,
  },
  toggleText: {
    color: '#007AFF',
  },
});

