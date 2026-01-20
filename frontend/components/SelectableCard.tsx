import React from 'react';
import { Pressable, Text, StyleSheet, View, ViewStyle } from 'react-native';

interface SelectableCardProps {
  label: string;
  selected: boolean;
  onPress: () => void;
  style?: ViewStyle;
}

const SelectableCard: React.FC<SelectableCardProps> = ({ label, selected, onPress, style }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.card,
        selected && styles.selected,
        pressed && styles.pressed,
        style,
      ]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityState={{ selected }}
      accessibilityLabel={label + (selected ? ' (selected)' : '')}
    >
      <View style={styles.contentRow}>
        <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>
        {selected && <View style={styles.checkIcon} accessibilityElementsHidden={true} />}
      </View>
    </Pressable>
  );
};

export default SelectableCard;

const styles = StyleSheet.create({
  card: {
    minWidth: 130,
    minHeight: 56,
    backgroundColor: '#1A2336',
    borderRadius: 14,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    paddingHorizontal: 18,
    borderWidth: 2,
    borderColor: '#5A6A7A',
    flexDirection: 'row',
    shadowColor: '#00BFFF',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
  },
  selected: {
    borderColor: '#00BFFF',
    borderWidth: 4,
    backgroundColor: '#14203A',
  },
  pressed: {
    backgroundColor: '#232B3E',
    opacity: 0.9,
  },
  contentRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#fff',
    fontSize: 19,
    fontWeight: 'bold',
    marginRight: 8,
  },
  selectedLabel: {
    color: '#00BFFF',
    textDecorationLine: 'underline',
  },
  checkIcon: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#00BFFF',
    borderWidth: 2,
    borderColor: '#fff',
    marginLeft: 2,
  },
});
