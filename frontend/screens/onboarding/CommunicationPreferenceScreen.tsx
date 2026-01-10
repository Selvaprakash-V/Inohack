import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useOnboarding } from '../../context/OnboardingContext';
import { SelectableCard } from '../../components';
import { LargeButton } from '../../components';

export default function CommunicationPreferenceScreen({ navigation }: any) {
  const { communicationPreference, setCommunicationPreference } = useOnboarding();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Communication Preference</Text>
      <Text style={styles.subtitle}>How do you prefer to communicate?</Text>
      <LargeButton
        title="Text"
        onPress={() => setCommunicationPreference('text')}
      />
      <LargeButton
        title="Sign Language"
        onPress={() => setCommunicationPreference('sign')}
      />
      <LargeButton
        title="Both"
        onPress={() => setCommunicationPreference('both')}
      />
      <LargeButton
        title="Next"
        onPress={() => navigation.navigate('UsageContext')}
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
