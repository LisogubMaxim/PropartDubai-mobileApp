import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import MainHeader from '../ui/MainHeader/MainHeader';
import SearchInput from '../ui/SearchInput/SearchInput';
import FiltersBtn from '../ui/FiltersBtn/FiltersBtn';
import GetConsultation from '../ui/GetConsultation/GetConsultation';

import styles from './mainStyles';

const Main = () => {
  return (
    <View style={styles.container}>
      <MainHeader />
      <View style={styles.block}>
        <SearchInput placeholder="Search property, area..." />
        <FiltersBtn />
      </View>
      <View style={styles.block}>
        <Text style={styles.title}>Special for you</Text>
        <TouchableOpacity>
          <Text style={styles.more}>More</Text>
        </TouchableOpacity>
      </View>
      <GetConsultation text="Our specialist will help you with any question you may have - we are here to help you!" />
    </View>
  );
};

export default Main;
