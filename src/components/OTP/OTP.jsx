import React, { useState } from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

import Logo from '../ui/Logo/Logo';
import Button from '../ui/Button/Button';

import styles from './otpStyle';

const OTP = () => {
  const [value, setValue] = useState('');
  const [isInvalidCode, setIsInvalidCode] = useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: 4 });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const inputHandler = (text) => {
    if (text !== '1111') {
      setIsInvalidCode(true);
    } else {
      setIsInvalidCode(false);
    }

    setValue(text);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Сonfirm your number</Text>
      <Text style={styles.text}>
        To verify your phone number, enter the code sent to the number +971 5
        143 6548
      </Text>

      <SafeAreaView style={styles.root}>
        <CodeField
          ref={ref}
          {...props}
          value={value}
          onChangeText={inputHandler}
          cellCount={4}
          rootStyle={styles.codeFiledRoot}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          renderCell={({ index, isFocused }) => (
            <Text
              key={index}
              style={[
                styles.cell,
                isFocused && styles.focusCell,
                isInvalidCode && styles.invalidCode,
              ]}
              onLayout={getCellOnLayoutHandler(index)}>
              {value.length > index ? value[index] : '•'}
            </Text>
          )}
        />
      </SafeAreaView>

      {isInvalidCode && <Text style={styles.invalidText}>Invalid code</Text>}

      <View style={styles.confirm}>
        <Button
          text="Confirm"
          backgroundColor={!isInvalidCode ? '#333863' : '#D6D7E0'}
          disabled={!isInvalidCode}
        />
        <Text style={styles.resend}>Resend code</Text>
      </View>
    </View>
  );
};

export default OTP;
