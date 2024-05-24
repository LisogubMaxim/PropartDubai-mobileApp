import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';

import ArrowDownSvg from '../../../../assets/svg/ArrowDownSvg';
import CheckedIconSvg from '../../../../assets/svg/CheckedIconSvg';

import styles from './dropDownSortStyles';

const DropDownSortType = ({ options, selectedValue, onChange }) => {
  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        closeModalWhenSelectedItem={true}
        containerStyle={styles.listContainer}
        placeholderStyle={styles.placeholderStyle}
        renderRightIcon={() => <ArrowDownSvg />}
        activeColor="#fff"
        data={options}
        visibleSelectedItem={false}
        labelField="label"
        valueField="value"
        placeholder="Choose sort type"
        value={selectedValue}
        renderItem={(item) => (
          <TouchableOpacity
            onPress={() => onChange(item.value)}
            style={styles.itemContainer}>
            <Text style={styles.text}>{item.label}</Text>
            <View
              style={[
                styles.checkBox,
                selectedValue === item.value && styles.checkedBox,
              ]}>
              <CheckedIconSvg />
            </View>
          </TouchableOpacity>
        )}
        onChange={(item) => {
          onChange(item);
        }}
      />
    </View>
  );
};

export default DropDownSortType;
