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
      // Backend schema requires secondaryLanguage, so send 'None' if empty or undefined
      secondaryLanguage: onboarding.secondaryLanguage && onboarding.secondaryLanguage.trim() !== ''
        ? onboarding.secondaryLanguage
        : 'None',
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

export async function checkUidInMongoDB(uid: string): Promise<boolean> {
  const baseUrl = BACKEND_URL || 'http://localhost:4000';

  const response = await fetch(`${baseUrl}/check-uid`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ uid }),
  });

  if (!response.ok) {
    throw new Error('Failed to check UID in MongoDB');
  }

  const data = await response.json();
  return data.exists; // Assume the backend returns { exists: boolean }
}

export async function saveUidToMongoDB(uid: string): Promise<void> {
  const baseUrl = BACKEND_URL || 'http://localhost:4000';

  const response = await fetch(`${baseUrl}/save-uid`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ uid }),
  });

  if (!response.ok) {
    throw new Error('Failed to save UID to MongoDB');
  }
}
