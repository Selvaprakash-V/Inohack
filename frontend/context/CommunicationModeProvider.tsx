import React, { createContext, useContext, useState, ReactNode } from 'react';

// Strict type for communication mode
type CommunicationMode = 'text' | 'sign' | 'both';

// Context value interface
interface CommunicationModeContextValue {
  mode: CommunicationMode;
  setMode: (mode: CommunicationMode) => void;
}

// Create context (undefined default for strict hook error)
const CommunicationModeContext = createContext<CommunicationModeContextValue | undefined>(undefined);

// Provider props
interface CommunicationModeProviderProps {
  initialMode: CommunicationMode;
  children: ReactNode;
}

/**
 * CommunicationModeProvider
 * - Initializes mode from onboarding.communicationPreference
 * - Exposes mode and setMode
 * - Does NOT persist or write to DB
 * - Wraps the app after login
 *
 * Future: This will control ChatInput, output, avatar, etc.
 */
export const CommunicationModeProvider: React.FC<CommunicationModeProviderProps> = ({ initialMode, children }) => {
  const [mode, setMode] = useState<CommunicationMode>(initialMode);

  return (
    <CommunicationModeContext.Provider value={{ mode, setMode }}>
      {children}
    </CommunicationModeContext.Provider>
  );
};

/**
 * useCommunicationMode
 * - Access current mode and setMode
 * - Throws if used outside provider
 */
export function useCommunicationMode(): CommunicationModeContextValue {
  const context = useContext(CommunicationModeContext);
  if (!context) {
    throw new Error('useCommunicationMode must be used within a CommunicationModeProvider');
  }
  return context;
}

// Types for external use
export type { CommunicationMode, CommunicationModeContextValue };