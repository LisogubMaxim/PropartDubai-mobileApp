import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

import logoPng from '../../../../assets/images/logo.png';
import BurgerBtnSvg from '../../../../assets/svg/BurgerBtnSvg';

import styles from './mainHeaderStyles';

const MainHeader = ({ onClick }) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Image source={logoPng} />
        <Text style={styles.text}>
          Real estate agency in Dubai with 15 years of experience
        </Text>
      </View>
      <TouchableOpacity onPress={onClick}>
        <BurgerBtnSvg />
      </TouchableOpacity>
    </View>
  );
};

export default MainHeader;
