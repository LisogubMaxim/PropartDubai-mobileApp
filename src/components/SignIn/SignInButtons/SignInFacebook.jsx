import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';

import FacebookIcon from '../../../../assets/images/facebook-icon.png';

import styles from './btnStyles';

const SignInFacebook = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Image source={FacebookIcon} />
      <Text style={styles.text}>Continue with Facebook</Text>
    </TouchableOpacity>
  );
};

export default SignInFacebook;
