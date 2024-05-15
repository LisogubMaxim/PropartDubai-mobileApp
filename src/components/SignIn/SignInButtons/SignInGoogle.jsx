import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import GoogleIcon from '../../../../assets/images/google-icon.png';

import styles from './btnStyles';

const SignInGoogle = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={GoogleIcon} />
      <Text style={styles.text}>Continue with Google</Text>
    </TouchableOpacity>
  );
};

export default SignInGoogle;
