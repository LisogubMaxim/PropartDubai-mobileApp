import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import CloseCrossSvg from '../../../../assets/svg/CloseCrossSvg';
import SortSvg from '../../../../assets/svg/SortSvg';
import SearchInput from '../../ui/SearchInput/SearchInput';
import GetConsultation from '../../ui/GetConsultation/GetConsultation';
import MenuBar from '../../ui/MenuBar/MenuBar';
import Pattern from './Pattern/Pattern';

import exploreAreasData from '../../../data/area/exploreAreasData';

import styles from './exploreAreasStyles';

const ExploreAreas = ({ onCloseModal }) => {
  const [search, setSearch] = useState('');

  const handleChangeInputSearch = (value) => {
    setSearch(value);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.title}>
          <Text style={styles.textTitle}>Explore areas</Text>
          <TouchableOpacity style={styles.button} onPress={onCloseModal}>
            <CloseCrossSvg />
          </TouchableOpacity>
        </View>
        <View style={styles.search}>
          <SearchInput
            placeholder={'Enter the area`s name'}
            onChange={handleChangeInputSearch}
            value={search}
          />
          <TouchableOpacity style={styles.button}>
            <SortSvg />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingTop: 16 }}>
        <View style={styles.body}>
          <View style={styles.propos}>
            <Pattern data={exploreAreasData} />
          </View>
          <View style={styles.help}>
            <Text style={styles.text}>Get help from our expert</Text>
            <GetConsultation
              text={
                'Our specialist will help you with any question you may have - we are here to help you!'
              }
            />
          </View>
        </View>
      </ScrollView>
      <MenuBar />
    </View>
  );
};

export default ExploreAreas;
