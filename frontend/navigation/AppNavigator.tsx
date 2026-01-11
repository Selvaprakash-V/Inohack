import React from 'react';

import EmailAuthScreen from '../screens/auth/EmailAuthScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/onboarding/WelcomeScreen';
import VisualPreferenceScreen from '../screens/onboarding/VisualPreferenceScreen';
import CommunicationPreferenceScreen from '../screens/onboarding/CommunicationPreferenceScreen';
import UsageContextScreen from '../screens/onboarding/UsageContextScreen';
import LanguagePreferenceScreen from '../screens/onboarding/LanguagePreferenceScreen';
import PermissionExplanationScreen from '../screens/onboarding/PermissionExplanationScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import { OnboardingProvider } from '../context/OnboardingContext';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <OnboardingProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="VisualPreference" component={VisualPreferenceScreen} />
          <Stack.Screen name="CommunicationPreference" component={CommunicationPreferenceScreen} />
          <Stack.Screen name="UsageContext" component={UsageContextScreen} />
          <Stack.Screen name="LanguagePreference" component={LanguagePreferenceScreen} />
          <Stack.Screen name="PermissionExplanation" component={PermissionExplanationScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="EmailAuth" component={EmailAuthScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </OnboardingProvider>
  );
}
