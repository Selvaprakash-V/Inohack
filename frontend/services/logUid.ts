// This file will log user UIDs for email auth signups

export const logUid = (uid: string) => {
  // In production, use a proper logging or database solution
  // For now, just append to a file (Node.js only, not in React Native runtime)
  // This is a placeholder for future MongoDB integration
  console.log('Logged UID:', uid);
};
