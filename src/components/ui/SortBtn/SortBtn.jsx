import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import SortSvg from '../../../../assets/svg/SortSvg';

import styles from './sortBtnStyles';

const SortBtn = () => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <SortSvg />
      </View>
    </TouchableOpacity>
  );
};

export default SortBtn;
