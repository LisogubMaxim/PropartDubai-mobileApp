import React, { useState } from 'react';
import { ScrollView, View, Text } from 'react-native';

import MenuBar from '../../ui/MenuBar/MenuBar';
import BurgerMenu from '../../ui/BurgerMenu/BurgerMenu';
import GetConsultation from '../../ui/GetConsultation/GetConsultation';
import SearchInput from '../../ui/SearchInput/SearchInput';
import FiltersBtn from '../../ui/FiltersBtn/FiltersBtn';
import MainHeader from '../../ui/MainHeader/MainHeader';
import PropertyCard from '../../ui/PropertyCard/PropertyCard';
import Point from '../../ui/FilterPoints/Point/Point';

import { propertiesData } from '../../../data/developers/developersData';

import styles from './developerPropStyles';

const DeveloperProperties = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
      <View style={styles.container}>
        <MainHeader onClick={() => setOpenMenu((prev) => !prev)} />
        <ScrollView>
          <View style={styles.block}>
            <SearchInput placeholder="Search property, area..." />
            <FiltersBtn />
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
      <BurgerMenu isMenuOpen={openMenu} closeMenu={() => setOpenMenu(false)} />
    </>
  );
};

export default DeveloperProperties;
