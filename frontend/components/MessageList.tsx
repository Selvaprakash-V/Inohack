import React from 'react';
import { View, Text } from 'react-native';
import SignAvatarOutput from './output/SignAvatarOutput';
import Subtitles from './output/Subtitles';

const MessageList = ({ messages, mode }: { messages: any[]; mode: 'text' | 'sign' | 'both' }) => {
  return (
    <View>
      {messages.map((message, index) => (
        <View key={index}>
          {mode !== 'sign' && message.text && (
            <Text>{message.text}</Text> // Render text bubbles only if mode is not 'sign'
          )}
          {mode !== 'text' && message.avatarInstructions && (
            <SignAvatarOutput text={message.avatarInstructions} /> // Render sign avatar
          )}
          {message.subtitles && (
            <Subtitles message={message.subtitles} /> // Always render subtitles
          )}
        </View>
      ))}
    </View>
  );
};

export default MessageList;