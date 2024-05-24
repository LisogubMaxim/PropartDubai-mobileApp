import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MultiSelect } from 'react-native-element-dropdown';
import ArrowDownSvg from '../../../../assets/svg/ArrowDownSvg';
import CheckedIconSvg from '../../../../assets/svg/CheckedIconSvg';

const DropDownAreaSelect = ({ data }) => {
  const [selected, setSelected] = useState([]);

  const handleSelect = (item) => {
    let newSelected;
    if (selected.includes(item.value)) {
      newSelected = selected.filter((value) => value !== item.value);
    } else {
      newSelected = [...selected, item.value];
    }
    setSelected(newSelected);
  };

  return (
    <MultiSelect
      style={styles.dropdown}
      containerStyle={styles.listContainer}
      placeholderStyle={styles.placeholderStyle}
      renderRightIcon={() => <ArrowDownSvg />}
      activeColor="#fff"
      data={data}
      visibleSelectedItem={false}
      labelField="label"
      valueField="value"
      placeholder="Choose area"
      value={selected}
      renderItem={(item) => (
        <TouchableOpacity
          onPress={() => handleSelect(item)}
          style={styles.itemContainer}>
          <Text style={styles.text}>{item.value}</Text>
          <View
            style={[
              styles.checkBox,
              selected.includes(item.value) && styles.checkedBox,
            ]}>
            <CheckedIconSvg />
          </View>
        </TouchableOpacity>
      )}
      onChange={(item) => {
        setSelected(item);
      }}
    />
  );
};

export default DropDownAreaSelect;

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#CFCFD3',
    borderRadius: 6,
    height: 300,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 17,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F1F1',
  },
  text: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    color: '#0F1121',
  },
  dropdown: {
    height: 56,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#CFCFD3',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 17,
    marginBottom: 26,
  },
  placeholderStyle: {
    fontSize: 16,
    color: '#6F707A',
  },
  checkBox: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: '#B7B8BC',
    borderRadius: 4,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkedBox: {
    backgroundColor: '#333863',
  },
});
