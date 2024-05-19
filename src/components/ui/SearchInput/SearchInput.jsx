import React from 'react';
import { Text, View, TextInput, Image } from 'react-native';

import searchIcon from '../../../../assets/images/search-icon.png';

import styles from './searchInputStyles';

const SearchInput = ({
  placeholder,
  name,
  onChange,
  value,
  clearInput,
  isError = false,
}) => {
  return (
    <View style={styles.SearchInput}>
      <Image source={searchIcon} style={styles.searchIcon} />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        name={name}
        onChangeText={onChange}
        value={value}
      />
    </View>
  );
};

export default SearchInput;
