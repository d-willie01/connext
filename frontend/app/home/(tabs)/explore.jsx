import React, {useState, useEffect} from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import {ScoreBox} from '../../../components/scoreBox'

export default function Settings() {
  const matchData = [
    {
      time: '09:30 AM',
      team1: {
        name: 'Indian Pacers',
        score: 118,
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png',
      },
      team2: {
        name: 'Houston Rockets',
        score: 106,
        logo: 'https://upload.wikimedia.org/wikipedia/en/2/28/Houston_Rockets.svg',
      },
    },
    // ... other matches
  ];

  const [BData, setBData] = useState({});

  const getData = async () => {
    try {
      const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/data/NBA`);
      const {events} = response.data
      setBData(events)
      console.log(BData)

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.headerTitle}>League Details</Text>
      </View>
      <FlatList
        data={BData}
        renderItem={({ item }) => <ScoreBox match={item} />}
        keyExtractor={(item) => item.time}
        contentContainerStyle={styles.matchList}
      />

      <Button onPress={getData} title="DATA"/>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#292929',
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  matchList: {
    paddingHorizontal: 10,
  },
});
