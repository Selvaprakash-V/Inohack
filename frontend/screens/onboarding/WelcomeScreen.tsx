import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Placeholder logo as a circle
function LogoPlaceholder() {
  return (
    <View style={styles.logo} accessibilityLabel="OneVoice logo placeholder" />
  );
}

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
      <LogoPlaceholder />
      <Text style={styles.tagline} accessibilityRole="header">
        Understand conversations. Be understood.
      </Text>
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('VisualPreference')}
        accessibilityRole="button"
        accessibilityLabel="Get Started"
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const NEON_BLUE = '#4FC3F7';
const DARK_BG = '#1A2233';
const GREY = '#B0BEC5';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: DARK_BG,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: NEON_BLUE,
    marginBottom: 32,
    borderWidth: 4,
    borderColor: GREY,
    shadowColor: NEON_BLUE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 8,
  },
  tagline: {
    fontSize: 28,
    color: GREY,
    textAlign: 'center',
    marginBottom: 48,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  button: {
    backgroundColor: NEON_BLUE,
    borderRadius: 12,
    paddingVertical: 18,
    paddingHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: NEON_BLUE,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  buttonText: {
    color: DARK_BG,
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
});
