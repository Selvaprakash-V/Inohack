import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const COLORS = {
  bg: '#0A0F2C',
  cardBg: 'rgba(255,255,255,0.06)',
  cardBorder: 'rgba(255,255,255,0.1)',
  neonBlue: '#5AD7FF',
  neonPurple: '#C77DFF',
  softWhite: '#F1F6FF',
  mutedText: '#A9B7D0',
};

export default function LoginScreen() {
  const handleGoogleLogin = () => {
    console.log('Google login pressed (placeholder)');
  };

  const handleEmailLogin = () => {
    console.log('Email login pressed (placeholder)');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Sign in to OneVoice</Text>
        <Text style={styles.subtitle}>
          Your preferences and communication settings are saved securely.
        </Text>
      </View>

      {/* Google Button */}
      <Pressable
        style={({ pressed }) => [
          styles.googleButton,
          pressed && { opacity: 0.9 },
        ]}
        onPress={handleGoogleLogin}
        accessibilityRole="button"
        accessibilityLabel="Continue with Google"
      >
        <MaterialCommunityIcons
          name="google"
          size={22}
          color={COLORS.neonBlue}
          style={styles.googleIcon}
        />
        <Text style={styles.googleText}>Continue with Google</Text>
      </Pressable>

      {/* Divider */}
      <Text style={styles.orText}>or</Text>

      {/* Email Option */}
      <Pressable
        onPress={handleEmailLogin}
        accessibilityRole="button"
        accessibilityLabel="Use email instead"
      >
        <Text style={styles.emailText}>Use email instead</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },

  header: {
    marginTop: 20,
    marginBottom: 60,
  },

  title: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 28,
    color: COLORS.softWhite,
    marginBottom: 10,
  },

  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.neonBlue,
    maxWidth: '90%',
  },

  googleButton: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  borderWidth: 1,
  borderColor: COLORS.neonBlue,
  borderRadius: 28,
  paddingVertical: 14,
  paddingHorizontal: 20,
  marginBottom: 20,
  backgroundColor: 'transparent',
},

  googleIcon: {
    marginRight: 10,
    color: COLORS.mutedText,
  },

  googleText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: COLORS.mutedText,
    letterSpacing: 0.3,
  },

  orText: {
    fontFamily: 'Inter_400Regular',
    fontSize: 13,
    color: COLORS.mutedText,
    textAlign: 'center',
    marginBottom: 18,
  },

  emailText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 15,
    color: COLORS.neonPurple,
    textAlign: 'center',
    textDecorationLine: 'underline',
  },
});
