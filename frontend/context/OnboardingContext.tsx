import React, { createContext, useContext, useState, ReactNode } from 'react';

type TextSize = 'large' | 'extra-large';
type CommunicationPreference = 'text' | 'sign' | 'both';
type UsageContext = 'classroom' | 'workplace' | 'daily' | 'public';

interface OnboardingState {
  textSize: TextSize;
  communicationPreference: CommunicationPreference;
  usageContexts: UsageContext[];
  primaryLanguage: string;
  secondaryLanguage?: string;
  permissionsExplained: boolean;
  setTextSize: (size: TextSize) => void;
  setCommunicationPreference: (pref: CommunicationPreference) => void;
  setUsageContexts: (contexts: UsageContext[]) => void;
  setPrimaryLanguage: (lang: string) => void;
  setSecondaryLanguage: (lang?: string) => void;
  setPermissionsExplained: (explained: boolean) => void;
}

const defaultState: OnboardingState = {
  textSize: 'large',
  communicationPreference: 'text',
  usageContexts: ['daily'],
  primaryLanguage: '',
  secondaryLanguage: undefined,
  permissionsExplained: false,
  setTextSize: () => {},
  setCommunicationPreference: () => {},
  setUsageContexts: () => {},
  setPrimaryLanguage: () => {},
  setSecondaryLanguage: () => {},
  setPermissionsExplained: () => {},
};

export const OnboardingContext = createContext<OnboardingState | undefined>(undefined);

export function OnboardingProvider({ children }: { children: ReactNode }) {
  const [textSize, setTextSize] = useState<TextSize>('large');
  const [communicationPreference, setCommunicationPreference] = useState<CommunicationPreference>('text');
  const [usageContexts, setUsageContexts] = useState<UsageContext[]>(['daily']);
  const [primaryLanguage, setPrimaryLanguage] = useState<string>('English');
  const [secondaryLanguage, setSecondaryLanguage] = useState<string | undefined>(undefined);
  const [permissionsExplained, setPermissionsExplained] = useState<boolean>(false);

  return (
    <OnboardingContext.Provider
      value={{
        textSize,
        communicationPreference,
        usageContexts,
        primaryLanguage,
        secondaryLanguage,
        permissionsExplained,
        setTextSize,
        setCommunicationPreference,
        setUsageContexts,
        setPrimaryLanguage,
        setSecondaryLanguage,
        setPermissionsExplained,
      }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

export function useOnboarding() {
  const context = useContext(OnboardingContext);
  if (!context) {
    throw new Error('useOnboarding must be used within an OnboardingProvider');
  }
  return context;
}
