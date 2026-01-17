import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface SubtitlesProps {
  message: string;
}

const Subtitles: React.FC<SubtitlesProps> = ({ message }) => {
  return <Text style={styles.subtitle}>{message}</Text>;
};

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 18, // TODO: Replace with onboarding.textSize
    color: '#000',
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 5,
    textAlign: 'center',
  },
});

export default Subtitles;