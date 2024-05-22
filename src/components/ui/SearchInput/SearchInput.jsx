import React from 'react';
import { View, TextInput } from 'react-native';

import SearchSvg from '../../../../assets/svg/SearchSvg';

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
    <View style={styles.searchInput}>
      <SearchSvg style={styles.searchIcon} />
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
