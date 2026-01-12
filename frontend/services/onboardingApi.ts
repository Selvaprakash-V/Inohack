import { getAuth } from 'firebase/auth';
import { OnboardingData } from '../context/OnboardingContext';

export async function storeOnboardingData(onboarding: OnboardingData) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) throw new Error('No authenticated user');

  const payload = {
    uid: user.uid,
    onboarding: {
      textSize: onboarding.textSize,
      communicationPreference: onboarding.communicationPreference,
      usageContexts: onboarding.usageContexts,
      primaryLanguage: onboarding.primaryLanguage,
      secondaryLanguage: onboarding.secondaryLanguage,
    },
  };

  const response = await fetch('http://localhost:4000/onboarding', {
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
