import React, { useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity } from 'react-native';

import MenuBar from '../../ui/MenuBar/MenuBar';
import GetConsultation from '../../ui/GetConsultation/GetConsultation';
import SearchInput from '../../ui/SearchInput/SearchInput';
import FiltersBtn from '../../ui/FiltersBtn/FiltersBtn';
import PropertyCard from '../../ui/PropertyCard/PropertyCard';
import Point from '../../ui/FilterPoints/Point/Point';
import BackWhiteButtonSvg from '../../../../assets/svg/BackWhiteButtonSvg';
import ModalWithCross from '../../ui/ModalWithCross/ModalWithCross';
import Filters from '../../Filters/Filters';

import { propertiesData } from '../../../data/developers/developersData';

import styles from './developerPropStyles';

const DeveloperProperties = ({ onCloseModal }) => {
  const [filtersVisible, setFiltersVisible] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.headerBlock}>
          <TouchableOpacity onPress={onCloseModal}>
            <BackWhiteButtonSvg />
          </TouchableOpacity>
          <Text style={styles.mainTitle}>Property by Emaar</Text>
        </View>
        <ScrollView>
          <View style={styles.inputBlock}>
            <SearchInput placeholder="Search property, area..." />
            <FiltersBtn callModal={() => setFiltersVisible(true)} />
          </View>
          <Point text={'Emaar'} />
          <View style={{ gap: 12, marginTop: 24, alignItems: 'center' }}>
            {propertiesData.map((property, idx) => (
              <PropertyCard
                width={350}
                height={284}
                key={idx}
                image={property.image}
                title={property.title}
                amount={property.amount}
              />
            ))}
          </View>
          <Text style={styles.getHelp}>Get help from our expert</Text>
          <GetConsultation text="Our specialist will help you with any question you may have - we are here to help you!" />
          <View style={{ height: 150 }} />
        </ScrollView>
      </View>
      <MenuBar />
      {filtersVisible && <View style={styles.overlay}></View>}
      <ModalWithCross visible={filtersVisible}>
        <Filters onCloseModal={() => setFiltersVisible(false)} />
      </ModalWithCross>
    </>
  );
};

export default DeveloperProperties;
