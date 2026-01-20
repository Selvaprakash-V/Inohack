import React from 'react';
import { Button } from 'react-native';
import * as Speech from 'expo-speech';

interface SpeechOutputProps {
  message: string;
}

const SpeechOutput: React.FC<SpeechOutputProps> = ({ message }) => {
  const handlePress = () => {
    Speech.speak(message);
  };

  return <Button title="Play Speech" onPress={handlePress} />;
};

export default SpeechOutput;