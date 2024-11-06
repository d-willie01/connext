import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, useWindowDimensions, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Link } from 'expo-router';

const WelcomeScreen = () => {
  const { width, height } = useWindowDimensions();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <ImageBackground
      source={{ uri: 'https://www.thestreet.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg3MjQ4OTU3ODI5Njg3MTgy/las-vegas.jpg' }}
      style={[styles.background, { width, height }]}
    >
      <LinearGradient
        colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']}
        style={styles.overlay}
      >
        <View style={styles.content}>
          <Text style={[styles.title, { fontSize: width * 0.08 }]}>GAMBLE LIKE A PRO</Text>
          <Text style={[styles.subtitle, { fontSize: width * 0.04 }]}>
            Rate your next parlay instantly with AI, guaranteed to guide you to that HIT!
          </Text>

          {/* Highlight effect on hover for web */}
          <TouchableOpacity
            style={[
              styles.button,
              isHovered && Platform.OS === 'web' && styles.buttonHovered,
            ]}
            activeOpacity={0.85} // This reduces opacity on press
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Link href={'/home'}>
            <Text style={[styles.buttonText, { fontSize: width * 0.05 }]}>GET STARTED</Text>
            </Link>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    color: '#FFFFFF',
    textAlign: 'center',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#E50914',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
    transition: 'transform 0.2s ease, background-color 0.2s ease', // Smooth transition
  },
  buttonHovered: {
    backgroundColor: '#D40712', // Slightly darker red on hover
    transform: [{ scale: 1.05 }], // Slight zoom effect on hover
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default WelcomeScreen;





