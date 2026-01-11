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
  neonBlue: '#5AD7FF',
  neonPurple: '#C77DFF',
  softWhite: '#F1F6FF',
  mutedText: '#A9B7D0',
};

export default function LoginScreen({ navigation }: any) {
  const handleGoogleLogin = () => {
    console.log('Google login pressed (placeholder)');
    // later: Firebase Google Auth
  };

  const handleEmailLogin = () => {
    navigation.navigate('EmailAuth');
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

      {/* Google */}
      <Pressable
        style={({ pressed }) => [
          styles.googleButton,
          pressed && { opacity: 0.9 },
        ]}
        onPress={handleGoogleLogin}
      >
        <MaterialCommunityIcons
          name="google"
          size={22}
          color={COLORS.neonBlue}
          style={{ marginRight: 10 }}
        />
        <Text style={styles.googleText}>Continue with Google</Text>
      </Pressable>

      {/* Divider */}
      <Text style={styles.orText}>or</Text>

      {/* Email */}
      <Pressable onPress={handleEmailLogin}>
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
  },

  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: COLORS.neonBlue,
    borderRadius: 28,
    paddingVertical: 14,
    marginBottom: 20,
  },

  googleText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 16,
    color: COLORS.mutedText,
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
