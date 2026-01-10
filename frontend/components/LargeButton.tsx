import React from 'react';
import { Pressable, Text, StyleSheet, ViewStyle } from 'react-native';

interface LargeButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
}

const LargeButton: React.FC<LargeButtonProps> = ({ title, onPress, disabled, style }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        pressed && !disabled && styles.pressed,
        disabled && styles.disabled,
        style,
      ]}
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      accessibilityState={{ disabled }}
    >
      <Text style={[styles.label, disabled && styles.labelDisabled]}>{title}</Text>
    </Pressable>
  );
};

export default LargeButton;

const styles = StyleSheet.create({
  button: {
    minWidth: 260,
    minHeight: 56,
    backgroundColor: '#1A2336',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 3,
    borderColor: '#00BFFF',
    shadowColor: '#00BFFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 6,
    elevation: 4,
  },
  pressed: {
    backgroundColor: '#14203A',
    opacity: 0.85,
  },
  disabled: {
    backgroundColor: '#232B3E',
    borderColor: '#5A6A7A',
    opacity: 0.7,
  },
  label: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  labelDisabled: {
    color: '#B0B8C1',
    textDecorationLine: 'line-through',
  },
});
