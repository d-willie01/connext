import { View, Text, Button, FlatList, StyleSheet } from 'react-native'
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons'
import { ScoreBox } from '../../../components/scoreBox';



export default function settings() {


  const matchData = [
    {
      time: '09:30 AM',
      team1: {
        name: 'Indian Pacer',
        score: 118,
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png',
      },
      team2: {
        name: 'Houston Rockets',
        score: 106,
        logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Indiana_Pacers.svg/1200px-Indiana_Pacers.svg.png',
      },
    },
    // ... other matches
  ];
  
  const getData = async() =>{
    
    try {
      response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL}/data/NBA`)

      console.log(response)
      
    } catch (error) {
      console.log(error)
    }


  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="arrow-back" size={24} color="white" />
        <Text style={styles.headerTitle}>League Details</Text>
      </View>
      <FlatList
        data={matchData}
        renderItem={({ item }) => <ScoreBox match={item} />}
        keyExtractor={(item) => item.time}
        contentContainerStyle={styles.matchList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  header: {
    flexDirection: 'row',
    alignItems:   
 'center',
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
  matchItem: {
    flexDirection: 'row', // Use flex direction for responsive layout
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#292929',
    marginBottom: 10,
  },
  teamLogos: {
    flex: 1, // Allocate space for logos
    alignItems: 'center',
  },
  teamLogo: {
    width: '40%', // Use percentage for responsive width
    height: '40%',
  },
  teamScores: {
    flex: 1, // Allocate space for scores
    alignItems: 'center',
  },
  teamScore: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  teamNames: {
    flex: 1, // Allocate space for names
    alignItems: 'center',
  },
  teamName: {
    fontSize: 14,
    color: 'white',
  },
  matchList: {
    paddingHorizontal: 10,
  },
});