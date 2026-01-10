import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

const COLORS = {
  bg: '#0A0F2C',
  neonBlue: '#5AD7FF',
  neonPurple: '#C77DFF',
  softWhite: '#F1F6FF',
  mutedText: '#A9B7D0',
  inputBg: 'rgba(255,255,255,0.06)',
  border: 'rgba(255,255,255,0.12)',
};

export default function EmailAuthScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const canContinue = email.length > 0 && password.length >= 8;

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Continue with email</Text>
          <Text style={styles.subtitle}>
            Your email is used to securely save your preferences and communication data.
          </Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Email address"
            placeholderTextColor={COLORS.mutedText}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            accessibilityLabel="Email address"
          />

          <TextInput
            style={styles.input}
            placeholder="Create password"
            placeholderTextColor={COLORS.mutedText}
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            accessibilityLabel="Password"
          />

          <Text style={styles.helper}>
            Minimum 8 characters
          </Text>
        </View>

        {/* CTA */}
        <View style={styles.footer}>
          <Pressable
            style={[
              styles.cta,
              !canContinue && { opacity: 0.4 },
            ]}
            onPress={() => {
              console.log('Email auth continue pressed (placeholder)');
              // Later:
              // 1. Firebase email/password auth
              // 2. Send onboarding context to backend
            }}
            disabled={!canContinue}
            accessibilityRole="button"
            accessibilityLabel="Continue"
          >
            <Text style={styles.ctaText}>Continue</Text>
          </Pressable>

          <Text style={styles.legal}>
            By continuing, your data is stored securely and never shared without consent.
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingHorizontal: 28,
    paddingTop: 72,
    paddingBottom: 48,
    justifyContent: 'space-between',
  },

  header: {
    marginBottom: 24,
  },

  title: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 28,
    color: COLORS.softWhite,
    marginBottom: 8,
  },

  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    lineHeight: 22,
    color: COLORS.mutedText,
  },

  form: {
    marginTop: 12,
  },

  input: {
    backgroundColor: COLORS.inputBg,
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
    color: COLORS.softWhite,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 14,
    fontFamily: 'Inter_400Regular',
  },

  helper: {
    fontSize: 13,
    color: COLORS.mutedText,
    marginLeft: 4,
    marginTop: 2,
    fontFamily: 'Inter_400Regular',
  },

  footer: {
    alignItems: 'center',
  },

  cta: {
    backgroundColor: COLORS.neonBlue,
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 56,
    shadowColor: COLORS.neonBlue,
    shadowOpacity: 0.5,
    shadowRadius: 14,
    elevation: 8,
    marginBottom: 18,
  },

  ctaText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 17,
    color: '#0A0F2C',
    letterSpacing: 0.4,
  },

  legal: {
    fontSize: 12,
    color: COLORS.mutedText,
    textAlign: 'center',
    maxWidth: '90%',
    fontFamily: 'Inter_400Regular',
  },
});
