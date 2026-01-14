import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import Video from 'react-native-video';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootParamList } from '../../navigation/AppNavigator';

export default function WelcomeGestureScreen() {
  const navigation = useNavigation<NavigationProp<RootParamList>>();
  const fadeAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();

    const timer = setTimeout(() => {
      navigation.navigate('MainApp'); // Use navigate instead of replace
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigation, fadeAnim]);

  return (
    <View style={styles.container}>
      <Video
        source={require('../../assets/welcomegesture.mp4')}
        style={styles.video}
        resizeMode="contain"
        repeat={false}
        paused={false}
      />
      <Animated.View style={[styles.textContainer, { opacity: fadeAnim }]}>
        <Text style={styles.header}>OneVoice</Text>
        <View style={styles.line} />
        <Text style={styles.subHeader}>Every Conversation matters</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  video: {
    width: '100%',
    height: 300,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
  },
  line: {
    width: '60%',
    height: 2,
    backgroundColor: '#000',
    marginVertical: 10,
  },
  subHeader: {
    fontSize: 16,
    color: '#555',
  },
});