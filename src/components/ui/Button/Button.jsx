import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './buttonStyles';

const Button = ({ text, backgroundColor, borderColor, onPress, disabled }) => {
  const styleButton = {
    backgroundColor: backgroundColor,
    borderColor: borderColor,
    borderWidth: borderColor ? 1 : 0,
  };

  return (
    <TouchableOpacity
      style={[styleButton, styles.button]}
      onPress={onPress}
      disabled={disabled}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
