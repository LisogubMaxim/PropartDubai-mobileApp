import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';

import ArrowDownSvg from '../../../../assets/svg/ArrowDownSvg';
import CheckedIconSvg from '../../../../assets/svg/CheckedIconSvg';

import styles from './dropDownAreaStyles';

const DropDownAreaSelect = ({ options, selectedValues, onChange }) => {
  const handleSelect = (item) => {
    let newSelected;
    if (selectedValues.includes(item.value)) {
      newSelected = selectedValues.filter((value) => value !== item.value);
    } else {
      newSelected = [...selectedValues, item.value];
    }
    onChange(newSelected);
  };

  return (
    <MultiSelect
      style={styles.dropdown}
      containerStyle={styles.listContainer}
      placeholderStyle={styles.placeholderStyle}
      renderRightIcon={() => <ArrowDownSvg />}
      activeColor="#fff"
      data={options}
      visibleSelectedItem={false}
      labelField="label"
      valueField="value"
      placeholder="Choose area"
      value={selectedValues}
      renderItem={(item) => (
        <TouchableOpacity
          onPress={() => handleSelect(item)}
          style={styles.itemContainer}>
          <Text style={styles.text}>{item.value}</Text>
          <View
            style={[
              styles.checkBox,
              selectedValues.includes(item.value) && styles.checkedBox,
            ]}>
            <CheckedIconSvg />
          </View>
        </TouchableOpacity>
      )}
      onChange={(item) => {
        onChange(item);
      }}
    />
  );
};

export default DropDownAreaSelect;
