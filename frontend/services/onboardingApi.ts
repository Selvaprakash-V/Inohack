import { auth } from './firebase';
import { OnboardingData } from '../context/OnboardingContext';

const baseUrl = 'http://10.242.218.241:4000';

export async function storeOnboardingData(onboarding: OnboardingData) {
  const user = auth.currentUser;
  if (!user) throw new Error('No authenticated user');

  const payload = {
    uid: user.uid,
    onboarding: {
      textSize: onboarding.textSize,
      communicationPreference: onboarding.communicationPreference,
      usageContexts: onboarding.usageContexts,
      primaryLanguage: onboarding.primaryLanguage,
      secondaryLanguage: onboarding.secondaryLanguage?.trim() || 'None',
    },
  };

  const response = await fetch(`${baseUrl}/onboarding`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text);
  }

  return response.json();
}

export async function fetchOnboardingData() {
  const user = auth.currentUser;
  if (!user) throw new Error('No authenticated user');

  const response = await fetch(`${baseUrl}/onboarding?uid=${user.uid}`, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text);
  }

  return response.json();
}
