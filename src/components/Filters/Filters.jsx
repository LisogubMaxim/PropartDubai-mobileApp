import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { filtersData, initialFilters } from '../../data/filtersData';

import BackWhiteButtonSvg from '../../../assets/svg/BackWhiteButtonSvg';
import DropDownAreaSelect from './DropDownAreaSelect/DropDownAreaSelect';
import DropDownSortType from './DropDownSortType/DropDownSortType';
import Range from './Range/Range';
import Bedrooms from './Bedrooms/Bedrooms';
import PropertyType from './PropertyType/PropertyType';
import CompletionStatus from './CompletionStatus/CompletionStatus';

import styles from './filtersStyles';

const Filters = ({ onCloseModal }) => {
  const [selectedFilters, setSelectedFilters] = useState(initialFilters);
  const [clearAll, setClearAll] = useState(false);

  const handleSelectFilters = (name, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

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
          clearAll={clearAll}
          options={filtersData.sizes}
          selectedValues={selectedFilters.size}
          onChange={(value) => handleSelectFilters('size', value)}
        />
        <Text style={styles.title}>Bedrooms</Text>
        <Bedrooms
          clearAll={clearAll}
          options={filtersData.bedrooms}
          selectedValues={selectedFilters.bedrooms}
          onChange={(value) => handleSelectFilters('bedrooms', value)}
        />
        <Text style={styles.title}>Price</Text>
        <Range
          clearAll={clearAll}
          options={filtersData.prices}
          selectedValues={selectedFilters.price}
          onChange={(value) => handleSelectFilters('price', value)}
        />
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
