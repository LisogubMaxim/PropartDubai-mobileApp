import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { filtersData, initialFilters } from '../../data/filtersData';

import BackWhiteButtonSvg from '../../../assets/svg/BackWhiteButtonSvg';
import DropDownAreaSelect from './DropDownAreaSelect/DropDownAreaSelect';
import DropDownSortType from './DropDownSortType/DropDownSortType';
import Range from './Range/Range';
import Bedrooms from './Bedrooms/Bedrooms';
import PropertyType from './PropertyType/PropertyType';
import CompletionStatus from './CompletionStatus/CompletionStatus';

const Filters = ({ onCloseModal }) => {
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [clearAll, setClearAll] = useState(false);

  const handleSelectFilters = (name, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  // console.log(selectedFilters.size);

  const clearAllFilters = () => {
    setSelectedFilters(initialFilters);
    setClearAll((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <TouchableOpacity onPress={onCloseModal}>
          <BackWhiteButtonSvg />
        </TouchableOpacity>
        <Text style={styles.mainTitle}>Filters</Text>
        <TouchableOpacity onPress={clearAllFilters}>
          <Text style={styles.clearAll}>Clear all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.title}>Area</Text>
        <DropDownAreaSelect
          options={filtersData.areas}
          selectedValues={selectedFilters.areas}
          onChange={(value) => handleSelectFilters('areas', value)}
        />
        <Text style={styles.title}>Property type</Text>
        <PropertyType
          clearAll={clearAll}
          options={filtersData.types}
          selectedValues={selectedFilters.types}
          onChange={(value) => handleSelectFilters('types', value)}
        />
        <Text style={styles.title}>Size</Text>
        <Range
          options={filtersData.sizes}
          selectedValues={selectedFilters.size}
          onChange={(value) => handleSelectFilters('sizes', value)}
        />
        <Text style={styles.title}>Bedrooms</Text>
        <Bedrooms
          clearAll={clearAll}
          options={filtersData.bedrooms}
          selectedValues={selectedFilters.bedrooms}
          onChange={(value) => handleSelectFilters('bedrooms', value)}
        />
        <Text style={styles.title}>Price</Text>
        <Range options={filtersData.prices} />
        <Text style={styles.title}>Completion status</Text>
        <CompletionStatus
          selectedValue={selectedFilters.completion_status}
          onChange={(value) => handleSelectFilters('completion_status', value)}
        />
        <Text style={styles.title}>Sort by</Text>
        <DropDownSortType
          options={filtersData.sort_params}
          selectedValue={selectedFilters.sort_params}
          onChange={(value) => handleSelectFilters('sort_params', value)}
        />
      </ScrollView>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: '95%',
  },
  headerBlock: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 60,
    marginBottom: 24,
  },
  mainTitle: {
    fontSize: 24,
    color: '#333863',
    fontFamily: 'OpenSans_600SemiBold',
  },
  title: {
    fontSize: 16,
    color: '#0F1121',
    fontFamily: 'OpenSans_600SemiBold',
    marginBottom: 12,
  },
  clearAll: {
    fontFamily: 'Nunito_500Medium',
    fontSize: 16,
    color: '#333863',
    textDecorationLine: 'underline',
  },
});
