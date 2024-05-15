import React, { useState } from 'react';
import { View, Text } from 'react-native';

import Logo from '../../ui/Logo/Logo';
import Input from '../../ui/Input/Input';
import Button from '../../ui/Button/Button';

import { validatePhoneNumber } from '../../../utils/validatePhoneNumber';

import styles from './signInStyle';
import SignInGoogle from '../SignInButtons/SignInGoogle';
import SignInFacebook from '../SignInButtons/SignInFacebook';
import SignInApple from '../SignInButtons/SignInApple';

const SignIn = () => {
  const [inputValue, setInputValue] = useState('');
  const [isButtonActive, setIsButtonActive] = useState(false);
  const [isError, setIsError] = useState(false);

  const inputHandler = (text) => {
    const phoneNumber = text;

    if (validatePhoneNumber(phoneNumber)) {
      setIsError(false);
      setIsButtonActive(true);
    } else {
      setIsError(true);
      setIsButtonActive(false);
    }

    if (phoneNumber.length === 0) {
      setIsError(false);
      setIsButtonActive(false);
    }

    if (/^\+?\d*$/.test(phoneNumber)) {
      setInputValue(phoneNumber);
    }
  };

  const clearInput = () => {
    setInputValue('');
    setIsError(false);
    setIsButtonActive(false);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <Text style={styles.title}>Welcome to ProPart</Text>
      <Text style={styles.text}>
        To get started please enter your phone number. We will send you a phone
        number verification code
      </Text>

      <Input
        placeholder={'+971 0 000 0000'}
        clearInput={clearInput}
        onChange={(text) => inputHandler(text)}
        value={inputValue}
        isError={isError}
      />
      {isError && <Text style={styles.incorrect}>Incorrect phone number</Text>}
      <View style={styles.continue}>
        <Button
          text="Continue"
          backgroundColor={isButtonActive ? '#333863' : '#D6D7E0'}
          disabled={!isButtonActive}
        />
      </View>
      <View style={styles.divider}>
        <View style={styles.line}></View>
        <Text style={styles.or}>or</Text>
        <View style={styles.line}></View>
      </View>
      <View style={styles.btns}>
        <SignInGoogle />
        <SignInFacebook />
        <SignInApple />
      </View>
    </View>
  );
};

export default SignIn;
