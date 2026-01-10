import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useOnboarding } from '../../context/OnboardingContext';
import { LargeButton } from '../../components';

export default function PermissionExplanationScreen({ navigation }: any) {
  const { setPermissionsExplained } = useOnboarding();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Permissions & Privacy</Text>
      <Text style={styles.subtitle}>
        OneVoice will request microphone and camera access for accessibility features. Your data is never shared without consent.
      </Text>
      <LargeButton
        title="Continue to Login"
        onPress={() => {
          setPermissionsExplained(true);
          navigation.navigate('Login');
        }}
        style={{ marginTop: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#101A2C' },
  title: { fontSize: 28, color: '#00BFFF', fontWeight: 'bold', marginBottom: 16 },
  subtitle: { fontSize: 18, color: '#B0B8C1', marginBottom: 24, textAlign: 'center', maxWidth: 320 },
});
