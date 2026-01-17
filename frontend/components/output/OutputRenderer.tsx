import React from 'react';
import { View } from 'react-native';
import { useCommunicationMode } from '../../context/CommunicationModeProvider';
import Subtitles from './Subtitles';
import SpeechOutput from './SpeechOutput';
import SignAvatarOutput from './SignAvatarOutput';

interface OutputRendererProps {
  message: string;
}

const OutputRenderer: React.FC<OutputRendererProps> = ({ message }) => {
  const { mode } = useCommunicationMode();

  return (
    <View>
      <Subtitles message={message} />
      {mode === 'sign' && <SignAvatarOutput text={message} />}
      {mode === 'both' && (
        <>
          <SignAvatarOutput text={message} />
          <SpeechOutput message={message} />
        </>
      )}
    </View>
  );
};

export default OutputRenderer;