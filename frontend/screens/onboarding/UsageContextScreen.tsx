import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useOnboarding } from '../../context/OnboardingContext';
import { SelectableCard } from '../../components';
import { LargeButton } from '../../components';

const USAGE_OPTIONS = [
  { label: 'Classroom', value: 'classroom' },
  { label: 'Workplace', value: 'workplace' },
  { label: 'Daily Life', value: 'daily' },
  { label: 'Public Spaces', value: 'public' },
];

export default function UsageContextScreen({ navigation }: any) {
  const { usageContexts, setUsageContexts } = useOnboarding();

  const toggleContext = (value: string) => {
    if (usageContexts.includes(value as any)) {
      setUsageContexts(usageContexts.filter((c) => c !== value));
    } else {
      setUsageContexts([...usageContexts, value as any]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Where will you use OneVoice?</Text>
      <Text style={styles.subtitle}>Select all that apply:</Text>
      <View style={styles.optionsRow}>
        {USAGE_OPTIONS.map((opt) => (
          <SelectableCard
            key={opt.value}
            label={opt.label}
            selected={usageContexts.includes(opt.value as any)}
            onPress={() => toggleContext(opt.value)}
          />
        ))}
      </View>
      <LargeButton
        title="Next"
        onPress={() => navigation.navigate('LanguagePreference')}
        style={{ marginTop: 32 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#101A2C' },
  title: { fontSize: 28, color: '#00BFFF', fontWeight: 'bold', marginBottom: 16 },
  subtitle: { fontSize: 18, color: '#B0B8C1', marginBottom: 24 },
  optionsRow: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginBottom: 16 },
});
