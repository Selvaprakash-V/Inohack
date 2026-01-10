import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useOnboarding } from '../../context/OnboardingContext';

const COLORS = {
  bg: '#0A0F2C',
  cardBg: 'rgba(255,255,255,0.06)',
  cardBorder: 'rgba(255,255,255,0.08)',
  neonPurple: '#C77DFF',
  neonBlue: '#5AD7FF',
  softWhite: '#F1F6FF',
  mutedText: '#A9B7D0',
};

export default function CommunicationPreferenceScreen({ navigation }: any) {
  const { communicationPreference, setCommunicationPreference } = useOnboarding();

  const isText = communicationPreference === 'text';
  const isSign = communicationPreference === 'sign';
  const isBoth = communicationPreference === 'both';

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          How do you prefer to communicate?
        </Text>
        <Text style={styles.subtitle}>
          Choose what you’re most comfortable using.
        </Text>
      </View>

      {/* Primary cards */}
      <View style={styles.cardRow}>
        {/* TEXT */}
        <Pressable
          style={[
            styles.card,
            isText && styles.cardActive,
          ]}
          onPress={() => setCommunicationPreference('text')}
        >
          <View style={styles.imageLayer} />

          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardTitle,
                isText && styles.cardTitleActive,
              ]}
            >
              Text
            </Text>

            <Text style={styles.cardDescription}>
              Read live captions and messages.
            </Text>
          </View>
        </Pressable>

        {/* SIGN */}
        <Pressable
          style={[
            styles.card,
            isSign && styles.cardActive,
          ]}
          onPress={() => setCommunicationPreference('sign')}
        >
          <View style={styles.imageLayer} />

          <View style={styles.cardContent}>
            <Text
              style={[
                styles.cardTitle,
                isSign && styles.cardTitleActive,
              ]}
            >
              Sign Language
            </Text>

            <Text style={styles.cardDescription}>
              Communicate using hand gestures.
            </Text>
          </View>
        </Pressable>
      </View>

      {/* BOTH */}
      <Pressable
        style={[
          styles.bothCard,
          isBoth && styles.cardActive,
        ]}
        onPress={() => setCommunicationPreference('both')}
      >
        <View style={styles.imageLayer} />

        <View style={styles.cardContent}>
          <Text
            style={[
              styles.cardTitle,
              isBoth && styles.cardTitleActive,
            ]}
          >
            Both
          </Text>

          <Text style={styles.cardDescription}>
            Switch between text and sign anytime.
          </Text>
        </View>
      </Pressable>

      {/* CTA */}
      <Pressable
        style={({ pressed }) => [
          styles.nextButton,
          pressed && { opacity: 0.88 },
        ]}
        onPress={() => navigation.navigate('UsageContext')}
      >
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
    </View>
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
    fontSize: 26,
    color: COLORS.softWhite,
    marginBottom: 6,
  },

  subtitle: {
    fontFamily: 'Inter_400Regular',
    fontSize: 15,
    color: COLORS.mutedText,
    lineHeight: 22,
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },

  card: {
    width: '48%',
    minHeight: 190,
    backgroundColor: COLORS.cardBg,
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    position: 'relative',
    overflow: 'hidden',
  },

  bothCard: {
    marginTop: 18,
    minHeight: 140,
    backgroundColor: COLORS.cardBg,
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.cardBorder,
    position: 'relative',
    overflow: 'hidden',
  },

  cardActive: {
    borderColor: COLORS.neonPurple,
  },

  imageLayer: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
    bottom: 12,
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.12)',
    opacity: 0.18,
  },

  cardContent: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  cardTitle: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    fontSize: 15,
    letterSpacing: 0.6,
    color: COLORS.mutedText,
    marginBottom: 6,
    textAlign: 'center',
  },

  cardTitleActive: {
    color: COLORS.neonPurple,
  },

  cardDescription: {
    fontFamily: 'Inter_400Regular',
    fontSize: 14,
    lineHeight: 20,
    color: COLORS.mutedText,
    textAlign: 'center',
  },

  nextButton: {
    alignSelf: 'center',
    backgroundColor: COLORS.neonBlue,
    borderRadius: 28,
    paddingVertical: 14,
    paddingHorizontal: 56,
    shadowColor: COLORS.neonBlue,
    shadowOpacity: 0.45,
    shadowRadius: 12,
    elevation: 8,
  },

  nextText: {
    fontFamily: 'Inter_500Medium',
    fontSize: 17,
    color: '#0A0F2C',
    letterSpacing: 0.4,
  },
});
