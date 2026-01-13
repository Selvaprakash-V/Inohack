import { auth } from './firebase';
import { OnboardingData } from '../context/OnboardingContext';
import { BACKEND_URL } from '@env';

export async function storeOnboardingData(onboarding: OnboardingData) {
  const user = auth?.currentUser;
  if (!user) throw new Error('No authenticated user');

  const payload = {
    uid: user.uid,
    onboarding: {
      textSize: onboarding.textSize,
      communicationPreference: onboarding.communicationPreference,
      usageContexts: onboarding.usageContexts,
      primaryLanguage: onboarding.primaryLanguage,
      // Backend schema requires secondaryLanguage, so send empty string when undefined
      secondaryLanguage: onboarding.secondaryLanguage ?? '',
    },
  };

  const baseUrl = BACKEND_URL || 'http://localhost:4000';

  const response = await fetch(`${baseUrl}/onboarding`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error('Failed to store onboarding data');
  }

  return await response.json();
}
