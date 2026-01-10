import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { useOnboarding } from '../../context/OnboardingContext';
import { LargeButton } from '../../components';

export default function LanguagePreferenceScreen({ navigation }: any) {
  const { primaryLanguage, setPrimaryLanguage, secondaryLanguage, setSecondaryLanguage } = useOnboarding();
  const [primary, setPrimary] = useState(primaryLanguage || '');
  const [secondary, setSecondary] = useState(secondaryLanguage || '');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Language Preferences</Text>
      <Text style={styles.subtitle}>What is your primary language?</Text>
      <TextInput
        style={styles.input}
        value={primary}
        onChangeText={setPrimary}
        placeholder="Primary Language"
        placeholderTextColor="#B0B8C1"
      />
      <Text style={styles.subtitle}>Secondary language (optional):</Text>
      <TextInput
        style={styles.input}
        value={secondary}
        onChangeText={setSecondary}
        placeholder="Secondary Language"
        placeholderTextColor="#B0B8C1"
      />
      <LargeButton
        title="Next"
        onPress={() => {
          setPrimaryLanguage(primary);
          setSecondaryLanguage(secondary || undefined);
          navigation.navigate('PermissionExplanation');
        }}
        style={{ marginTop: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#101A2C' },
  title: { fontSize: 28, color: '#00BFFF', fontWeight: 'bold', marginBottom: 16 },
  subtitle: { fontSize: 18, color: '#B0B8C1', marginBottom: 8 },
  input: { width: 260, height: 44, backgroundColor: '#1A2336', color: '#fff', borderRadius: 8, paddingHorizontal: 12, marginBottom: 16, fontSize: 18 },
});
