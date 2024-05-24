import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import ArrowDownSvg from '../../../../assets/svg/ArrowDownSvg';
import CheckedIconSvg from '../../../../assets/svg/CheckedIconSvg';

const DropDownSortType = ({ data }) => {
  const [selected, setSelected] = useState(null);

  return (
    <View style={styles.container}>
      <Dropdown
        style={styles.dropdown}
        closeModalWhenSelectedItem={true}
        containerStyle={styles.listContainer}
        placeholderStyle={styles.placeholderStyle}
        renderRightIcon={() => <ArrowDownSvg />}
        activeColor="#fff"
        data={data}
        visibleSelectedItem={false}
        labelField="label"
        valueField="value"
        placeholder="Choose sort type"
        value={selected}
        renderItem={(item) => (
          <TouchableOpacity
            onPress={() => setSelected(item.value)}
            style={styles.itemContainer}>
            <Text style={styles.text}>{item.label}</Text>
            <View
              style={[
                styles.checkBox,
                selected === item.value && styles.checkedBox,
              ]}>
              <CheckedIconSvg />
            </View>
          </TouchableOpacity>
        )}
        onChange={(item) => {
          setSelected(item);
        }}
      />
    </View>
  );
};

export default DropDownSortType;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  listContainer: {
    position: 'absolute',
    bottom: '198%',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#CFCFD3',
    borderRadius: 6,
    height: 238,
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
