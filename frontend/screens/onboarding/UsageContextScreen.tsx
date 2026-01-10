import React, { useEffect } from 'react';
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

const CONTEXTS = [
  { label: 'Classroom', value: 'classroom' },
  { label: 'Workplace', value: 'workplace' },
  { label: 'Daily Life', value: 'daily' },
  { label: 'Public Services', value: 'public' },
];

export default function UsageContextScreen({ navigation }: any) {
  const { usageContexts, setUsageContexts } = useOnboarding();

  // 🔑 Ensure Daily Life is always selected by default
  useEffect(() => {
    if (!usageContexts.includes('daily')) {
      setUsageContexts(['daily', ...usageContexts]);
    }
  }, []);

  const toggleContext = (value: string) => {
    if (value === 'daily') return; // Daily Life cannot be deselected

    if (usageContexts.includes(value as any)) {
      setUsageContexts(usageContexts.filter((c) => c !== value));
    } else {
      setUsageContexts([...usageContexts, value as any]);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          Where will you use OneVoice?
        </Text>
        <Text style={styles.subtitle}>
          Select all that apply. You can change this later.
        </Text>
      </View>

      {/* Cards */}
      <View style={styles.grid}>
        {CONTEXTS.map((ctx) => {
          const active = usageContexts.includes(ctx.value as any);

          return (
            <Pressable
              key={ctx.value}
              style={[
                styles.card,
                active && styles.cardActive,
              ]}
              onPress={() => toggleContext(ctx.value)}
            >
              <View style={styles.imageLayer} />

              <View style={styles.cardContent}>
                <Text
                  style={[
                    styles.cardTitle,
                    active && styles.cardTitleActive,
                  ]}
                >
                  {ctx.label}
                </Text>

                <Text style={styles.cardDescription}>
                  {getDescription(ctx.value)}
                </Text>
              </View>
            </Pressable>
          );
        })}
      </View>

      {/* CTA */}
      <Pressable
        style={({ pressed }) => [
          styles.nextButton,
          pressed && { opacity: 0.88 },
        ]}
        onPress={() => navigation.navigate('LanguagePreference')}
      >
        <Text style={styles.nextText}>Next</Text>
      </Pressable>
    </View>
  );
}

/* Helper text per context */
function getDescription(value: string) {
  switch (value) {
    case 'classroom':
      return 'Lectures, learning, and study sessions.';
    case 'workplace':
      return 'Meetings, discussions, and office talk.';
    case 'daily':
      return 'Casual conversations and everyday use.';
    case 'public':
      return 'Banks, hospitals, and public offices.';
    default:
      return '';
  }
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

  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 16,
  },

  card: {
    width: '48%',
    minHeight: 170,
    backgroundColor: COLORS.cardBg,
    borderRadius: 18,
    padding: 18,
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
