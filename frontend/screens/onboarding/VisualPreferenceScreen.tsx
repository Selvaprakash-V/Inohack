import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useOnboarding } from '../../context/OnboardingContext';
import { LargeButton } from '../../components';

export default function VisualPreferenceScreen({ navigation }: any) {
  const { textSize, setTextSize } = useOnboarding();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Visual Preference</Text>
      <Text style={styles.subtitle}>Choose your preferred text size:</Text>
      <LargeButton
        title="Large Text"
        onPress={() => setTextSize('large')}
      />
      <LargeButton
        title="Extra Large Text"
        onPress={() => setTextSize('extra-large')}
      />
      <LargeButton
        title="Next"
        onPress={() => navigation.navigate('CommunicationPreference')}
        style={{ marginTop: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#101A2C' },
  title: { fontSize: 28, color: '#00BFFF', fontWeight: 'bold', marginBottom: 16 },
  subtitle: { fontSize: 18, color: '#B0B8C1', marginBottom: 24 },
});
