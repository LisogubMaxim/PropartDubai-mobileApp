import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';

import MenuBar from '../../ui/MenuBar/MenuBar';
import GetConsultation from '../../ui/GetConsultation/GetConsultation';
import SearchInput from '../../ui/SearchInput/SearchInput';
import SortBtn from '../../ui/SortBtn/SortBtn';

import CloseCrossSvg from '../../../../assets/svg/CloseCrossSvg';

import { developers } from '../../../data/developers/developersData';

import styles from './exploreDevelopersStyles';

const ExploreDevelopers = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={[styles.block, { marginTop: 60 }]}>
          <Text style={styles.mainTitle}>Explore developers</Text>
          <TouchableOpacity style={styles.close}>
            <CloseCrossSvg />
          </TouchableOpacity>
        </View>
        <ScrollView>
          <View style={styles.block}>
            <SearchInput placeholder="Enter the developer's name" />
            <SortBtn />
          </View>
          <View
            style={{
              gap: 12,
              display: 'flex',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            {developers.map((item, idx) => (
              <View>
                <Image source={item.logo} key={idx} style={styles.logo} />
              </View>
            ))}
          </View>
          <Text style={styles.getHelp}>Get help from our expert</Text>
          <GetConsultation text="Our specialist will help you with any question you may have - we are here to help you!" />
          <View style={{ height: 150 }} />
        </ScrollView>
      </View>
      <MenuBar />
    </>
  );
};

export default ExploreDevelopers;
