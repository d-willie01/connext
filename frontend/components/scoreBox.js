import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

export const ScoreBox = ({match}) =>{

    return(
        <View style={styles.matchItem}>
      <View style={styles.matchInfo}>
        <Text style={styles.matchTime}>{match.time}</Text>
        <View style={styles.teamLogos}>
          <Image source={match.team1.logo} style={styles.teamLogo} />
          <Image source={match.team2.logo} style={styles.teamLogo} />
        </View>
        <View style={styles.teamScores}>
          <Text style={styles.teamScore}>{match.team1.score}</Text>
          <Text style={styles.teamScore}>{match.team2.score}</Text>
        </View>
        <View style={styles.teamNames}>
          <Text style={styles.teamName}>{match.team1.name}</Text>
          <Text style={styles.teamName}>{match.team2.name}</Text>
        </View>
      </View>
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