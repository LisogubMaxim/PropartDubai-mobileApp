import React from 'react';
import { TextInput, View } from 'react-native';

import CrossSvg from '../../../../assets/svg/CrossSvg';
import RedCrossSvg from '../../../../assets/svg/RedCrossSvg';

import styles from './inputStyles';

const Input = ({
  placeholder,
  name,
  onChange,
  value,
  clearInput,
  isError = false,
}) => {
  return (
    <View style={[styles.input, isError && styles.error]}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        name={name}
        onChangeText={onChange}
        value={value}
      />
      {value &&
        (isError ? (
          <RedCrossSvg onPress={clearInput} />
        ) : (
          <CrossSvg onPress={clearInput} />
        ))}
    </View>
  );
};

export default Input;
