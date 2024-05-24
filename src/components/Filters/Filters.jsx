import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { filtersData } from '../../data/filtersData';

import BackWhiteButtonSvg from '../../../assets/svg/BackWhiteButtonSvg';
import DropDownAreaSelect from './DropDownAreaSelect/DropDownAreaSelect';
import DropDownSortType from './DropDownSortType/DropDownSortType';
import Range from './Range/Range';
import Bedrooms from './Bedrooms/Bedrooms';
import PropertyType from './PropertyType/PropertyType';

const Filters = ({ onCloseModal }) => {
  const [openList, setOpenList] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.headerBlock}>
        <TouchableOpacity onPress={onCloseModal}>
          <BackWhiteButtonSvg />
        </TouchableOpacity>
        <Text style={styles.mainTitle}>Filters</Text>
        <TouchableOpacity>
          <Text style={styles.clearAll}>Clear all</Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        <Text style={styles.title}>Area</Text>
        <DropDownAreaSelect data={filtersData.areas} />
        <Text style={styles.title}>Property type</Text>
        <PropertyType />
        <Text style={styles.title}>Size</Text>
        <Range data={filtersData.sizes} />
        <Text style={styles.title}>Bedrooms</Text>
        <Bedrooms />
        <Text style={styles.title}>Price</Text>
        <Range data={filtersData.prices} />
        <Text style={styles.title}>Completion status</Text>
        <Bedrooms />
        <Text style={styles.title}>Sort by</Text>
        <DropDownSortType data={filtersData.sort_params} />
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
