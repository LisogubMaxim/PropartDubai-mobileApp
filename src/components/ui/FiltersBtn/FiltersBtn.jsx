import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import SettingsSvg from '../../../../assets/svg/SettingsSvg';

import styles from './filtersBtnStyles';

const FiltersBtn = ({ callModal }) => {
  return (
    <TouchableOpacity onPress={callModal}>
      <View style={styles.button}>
        <SettingsSvg />
      </View>
    </TouchableOpacity>
  );
};

export default FiltersBtn;
