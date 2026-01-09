import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Pressable, Alert } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function LoginScreen() {
  const handleGoogleLogin = () => {
    console.log('Google login pressed (placeholder)');
    // Placeholder: Add real auth logic later
  };

  const handleEmailLogin = () => {
    console.log('Email login pressed (placeholder)');
    // Placeholder: Add real auth logic later
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title} accessibilityRole="header">
        Sign in to OneVoice
      </Text>
      <Text style={styles.subtitle}>
        Your preferences and communication settings will be saved securely
      </Text>
      <TouchableOpacity
        style={styles.googleButton}
        activeOpacity={0.85}
        onPress={handleGoogleLogin}
        accessibilityRole="button"
        accessibilityLabel="Continue with Google"
      >
        <MaterialCommunityIcons name="google" size={28} color={NEON_BLUE} style={styles.icon} />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>
      <Pressable
        style={({ pressed }) => [styles.emailButton, pressed && styles.emailButtonPressed]}
        onPress={handleEmailLogin}
        accessibilityRole="button"
        accessibilityLabel="Use email instead"
      >
        <Text style={styles.emailButtonText}>Use email instead</Text>
      </Pressable>
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
  title: {
    fontSize: 28,
    color: GREY,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 18,
    color: GREY,
    marginBottom: 40,
    textAlign: 'center',
    letterSpacing: 0.2,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'transparent',
    borderColor: NEON_BLUE,
    borderWidth: 2,
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 32,
    marginBottom: 24,
    width: '100%',
    justifyContent: 'center',
    shadowColor: NEON_BLUE,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 4,
  },
  icon: {
    marginRight: 16,
  },
  googleButtonText: {
    color: NEON_BLUE,
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  emailButton: {
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  emailButtonPressed: {
    backgroundColor: '#26324D',
  },
  emailButtonText: {
    color: GREY,
    fontSize: 18,
    textDecorationLine: 'underline',
    fontWeight: '500',
  },
});
