import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import AppleIcon from '../../../../assets/images/apple-icon.png';

import styles from './btnStyles';

const SignInApple = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={AppleIcon} />
      <Text style={styles.text}>Continue with Apple</Text>
    </TouchableOpacity>
  );
};

export default SignInApple;
