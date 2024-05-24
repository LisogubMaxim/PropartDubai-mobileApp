import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

import styles from './completionStyles';

const CompletionStatus = ({ selectedValue, onChange }) => {
  const btnLabels = ['Any', 'Ready', 'Off-plan'];

  const handlePress = (status) => {
    if (selectedValue === status) {
      onChange('');
    } else {
      onChange(status);
    }
  };

  const buttonStyle = {
    backgroundColor: selectedValue ? '#333863' : null,
    borderColor: '#333863',
  };

  return (
    <View style={styles.container}>
      {btnLabels.map((btn, idx) => (
        <TouchableOpacity
          key={idx}
          style={[styles.button, selectedValue === btn && buttonStyle]}
          onPress={() => handlePress(btn)}>
          <Text
            style={[
              styles.textSelectionButton,
              { color: selectedValue === btn ? '#ffffff' : '#0F1121' },
            ]}>
            {btn}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default CompletionStatus;
