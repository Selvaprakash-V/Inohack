import React from 'react';
import { View, Text } from 'react-native';

interface SignAvatarOutputProps {
  text: string;
}

const SignAvatarOutput: React.FC<SignAvatarOutputProps> = ({ text }) => {
  return (
    <View>
      {/* TODO: Replace placeholder with actual sign language model */}
      <Text>Sign Avatar Placeholder for: {text}</Text>
    </View>
  );
};

export default SignAvatarOutput;