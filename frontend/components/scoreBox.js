import { View, Text, Image, StyleSheet, useWindowDimensions } from 'react-native';
import React from 'react';

export const ScoreBox = ({ match }) => {
  const { width } = useWindowDimensions();

  console.log(match)

  return (
    <View style={styles.matchItem}>
      <Text style={styles.matchTime}>
  {match?.competitions?.[0]?.odds?.[0]?.details ?? 'No odds details available'}
    </Text>

      <View style={styles.teamContainer}>
        <View style={styles.team}>
          <Image
            source={{ uri: match?.competitions[0]?.competitors[0]?.team?.logo ?? '' }}
            style={[styles.teamLogo, { width: width * 0.1, height: width * 0.1 }]}
          />
          <Text style={styles.teamName}>{match?.competitions[0]?.competitors[0]?.team?.name ?? 'Team 1'}</Text>
          <Text style={styles.teamScore}>{match?.competitions[0]?.competitors[0]?.score ?? 'N/A'}</Text>
        </View>
        <View style={styles.team}>
          <Image
            source={{ uri: match?.competitions[0]?.competitors[1]?.team?.logo ?? '' }}
            style={[styles.teamLogo, { width: width * 0.1, height: width * 0.1 }]}
          />
          <Text style={styles.teamName}>{match?.competitions[0]?.competitors[1]?.team?.name ?? 'Team 2'}</Text>
          <Text style={styles.teamScore}>{match?.competitions[0]?.competitors[1]?.score ?? 'N/A'}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  matchItem: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#292929',
    marginBottom: 10,
    borderRadius: 10,
  },
  matchTime: {
    fontSize: 14,
    color: '#FF8C00',
    marginBottom: 10,
  },
  teamContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  team: {
    alignItems: 'center',
    flex: 1,
  },
  teamLogo: {
    resizeMode: 'contain',
    marginBottom: 5,
  },
  teamName: {
    fontSize: 14,
    color: 'white',
  },
  teamScore: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
});

