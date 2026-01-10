import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
} from 'react-native';

const COLORS = {
  neonBlue: '#5AD7FF',
  neonPurple: '#C77DFF',
  softWhite: '#F1F6FF',
  mutedText: '#A9B7D0',
};

function LogoOrb() {
  return (
    <View style={styles.logoOuter}>
      <View style={styles.logoInner} />
    </View>
  );
}

export default function WelcomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.root}>
      {/* BACKGROUND IMAGE — SINGLE SOURCE */}
      <Image
        source={require('../../assets/bg-placeholder.png')}
        style={styles.backgroundImage}
        resizeMode="cover"
        accessibilityIgnoresInvertColors
      />

      {/* CONTENT */}
      <View style={styles.container}>
        <View style={styles.content}>
          <LogoOrb />

          <Text style={styles.title}>
            Understand{'\n'}
            <Text style={styles.titleAccent}>Conversations</Text>
          </Text>

          <Text style={styles.subtitle}>
            Be understood. Communicate freely without barriers.
          </Text>
        </View>

        <Pressable
          style={({ pressed }) => [
            styles.cta,
            pressed && { opacity: 0.88 },
          ]}
          onPress={() => navigation.navigate('VisualPreference')}
          accessibilityRole="button"
          accessibilityLabel="Get started"
        >
          <View style={styles.ctaGradient}>
            <Text style={styles.ctaText}>Get started</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#000',
  },

  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
    opacity: 0.22, // 🔑 image clearly visible but not noisy
  },

  container: {
    flex: 1,
    paddingHorizontal: 28,
    paddingTop: 80,
    paddingBottom: 48,
    justifyContent: 'space-between',
  },

  content: {
    alignItems: 'flex-start',
  },

  logoOuter: {
    width: 96,
    height: 96,
    borderRadius: 48,
    marginBottom: 48,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    shadowColor: COLORS.neonPurple,
    shadowOpacity: 0.6,
    shadowRadius: 26,
    elevation: 12,
  },

  logoInner: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: COLORS.neonBlue,
    opacity: 0.95,
  },

  title: {
    fontSize: 34,
    lineHeight: 40,
    fontWeight: '600',
    color: COLORS.softWhite,
  },

  titleAccent: {
    color: COLORS.neonPurple,
    fontWeight: '700',
  },

  subtitle: {
    marginTop: 18,
    fontSize: 16,
    lineHeight: 24,
    color: COLORS.mutedText,
    maxWidth: '85%',
  },

  cta: {
    alignSelf: 'center',
    width: '60%',
    borderRadius: 28,
    overflow: 'hidden',
    shadowColor: COLORS.neonBlue,
    shadowOpacity: 0.5,
    shadowRadius: 14,
    elevation: 8,
  },

  ctaGradient: {
    paddingVertical: 14,
    alignItems: 'center',
    backgroundColor: COLORS.neonBlue, // solid, clean CTA
  },

  ctaText: {
    fontSize: 17,
    fontWeight: '600',
    color: '#0A0F2C',
    letterSpacing: 0.4,
  },
});
