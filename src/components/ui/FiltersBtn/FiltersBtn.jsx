import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import settingsIcon from '../../../../assets/images/settings-icon.png';

import styles from './filtersBtnStyles';

const FiltersBtn = () => {
  return (
    <TouchableOpacity>
      <View style={styles.button}>
        <Image source={settingsIcon} />
      </View>
    </TouchableOpacity>
  );
};

export default FiltersBtn;
